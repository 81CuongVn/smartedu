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

		count, err := userCollecntion.CountDocuments(ctx, bson.M{
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

func Login() {
return func( c *gin.Context) {
	ctx, cancel := context.WithTimeout(context.Background())


}

func GetUsers() {

}

func GetUserByID() {
}
