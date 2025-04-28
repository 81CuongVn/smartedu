package routes

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	router.POST("/login", controller.Login())
	router.POST("/signup", Signup())
}