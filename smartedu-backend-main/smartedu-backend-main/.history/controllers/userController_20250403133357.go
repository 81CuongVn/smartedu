package controllers

import (
	"authentication/config"
	"authentication/models"
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

		user.Password = HashPassword(user.Password)
		user.Create_at = time.Now()
		user.Updated_at = time.Now()
		user.ID = primitive.NewObjectID()


	}
}

func Login() {

}

func GetUsers() {

}

func GetUserByID() {
}
