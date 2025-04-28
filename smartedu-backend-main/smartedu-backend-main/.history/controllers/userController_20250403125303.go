package controllers

import (
	"authentication/models"
	"context"

	"github.com/gin-gonic/gin"
)

func Signup() gin.HandlerFunc{
	return func(c *gin.Context) {
		// Xử lý đăng ký người dùng ở đây
		ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel() // Đảm bảo hủy bỏ ngữ cảnh sau khi hoàn thành

		var user models.User
		
		if err:=c.B

	} 

}

func Login() {

}

func GetUsers() {

}

func GetUserByID() {
}
