package routes

import (
	"authentication/controllers"
	"authentication/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.POST("/login", controllers.Login())
	router.POST("/signup", controllers.Signup())

	protected := router.Group("/")
	protected.Use(middleware.Auththen())


	{
		protected.GET("/users", controllers.GetUsers())
		protected.GET("/users/:id", controllers.GetUserByID())
	}
}