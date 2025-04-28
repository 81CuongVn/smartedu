package controllers

import (
	"authentication/config"
	"authentication/models"
	"authentication/helpers"
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var validate = validator.New()
var userCollection = config.OpenCollection("users")

func Signup() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Xử lý đăng ký người dùng ở đây
		ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel() // Đảm bảo hủy bỏ ngữ cảnh sau khi hoàn thành

		var user models.User

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		//validate user input
		if validateionErr := validate.Struct(user); validateionErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": validateionErr.Error()})
			return
		}

		count, err := userCollection.CountDocuments(ctx, bson.M{
			"$or": []bson.M{
				{"email": user.Email},
				{"Phone": user.Phone},
			},
		})

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Email or Phone already exists"})
			return
		}

		user.Password = helpers.HashPassword(user.Password)
		user.Created_at = time.Now()
		user.Updated_at = time.Now()
		user.ID = primitive.NewObjectID()
		user.User_id = user.ID.Hex()
		accessToken, refreshToken := helpers.GenerateToken(*user.Email, user.User_id, *user.Role)
		user.Token = &accessToken
		user.Refresh_token = &refreshToken

		_, err = userCollection.InsertOne(ctx, user)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "User created successfully", "user": user})
	}
}
func Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel()

		var user models.User
		var foundUser models.User

		// Get user input
		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		err := userCollection.FindOne(ctx, bson.M{"email": user.Email}).Decode(&foundUser)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
			return
		}

		//verify password
		passwordIsValid, msg := helpers.VerifyPassword(*foundUser.Password, *user.Password)
		if !passwordIsValid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": msg})
			return
		}

		token, refreshToken := helpers.GenerateTokens(*foundUser.Email, *&foundUser.User_id, *foundUser.Role)
		helpers.UpdateAllTokens(token, refreshToken, foundUser.User_id)

		c.JSON(http.StatusOK, gin.H{
			"user":          foundUser,
			"token":         token,
			"refresh_token": refreshToken,
		})
	}
}

func GetUser() gin.HandlerFunc {
	return func(c *gin.Context) {
		requestedUserId := c.Param("id")

		// Get claims from the context
		claims, exists := c.Get("claims")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		// Type assertion to get the claims object
		tokenClaims, ok := claims.(*helpers.Claims)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid claims"})
			return
		}

		tokenUserId := tokenClaims.UserID
		userType := tokenClaims.Role

		if userType != "ADMIN" && tokenUserId != requestedUserId {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel()

		var user models.User
		err := userCollection.FindOne(ctx, bson.M{"user_id": requestedUserId}).Decode(&user)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}

		c.JSON(http.StatusOK, user)
	}
}

func GetUsers() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Retrieve claims from context
		claims, exists := c.Get("claims")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		// Type assertion to get the claims object
		tokenClaims, ok := claims.(*helpers.Claims)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid claims"})
			return
		}

		// Check if the user is an ADMIN
		if tokenClaims.Role != "ADMIN" {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
			return
		}

		// Proceed to get the users list from the database
		ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel()

		// Find all users
		cursor, err := userCollection.Find(ctx, bson.M{})
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer cursor.Close(ctx)

		var users []models.User
		if err := cursor.All(ctx, &users); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Return the list of users
		c.JSON(http.StatusOK, users)
	}
}