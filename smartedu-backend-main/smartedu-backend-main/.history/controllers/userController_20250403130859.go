package controllers

import (
	"authentication/config"
	"authentication/models"
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
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
			"$or{"email": user.Email},
			{"Phone": user.Phone},
		})
	}
}

func Login() {

}

func GetUsers() {

}

func GetUserByID() {
}
