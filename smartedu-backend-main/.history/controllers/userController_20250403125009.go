package controllers

import "github.com/gin-gonic/gin"

func Signup() gin.HandlerFunc{
	return func(c *gin.Context) {
		// Xử lý đăng ký người dùng ở đây
		ctx, cancel := 
		c.JSON(200, gin.H{
			"message": "User signed up successfully",
		})
	} 

}

func Login() {

}

func GetUsers() {

}

func GetUserByID() {
}
