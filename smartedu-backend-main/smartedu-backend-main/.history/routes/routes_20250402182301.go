package routes

import (
	"hello/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	router.POST("/login", controllers.Login())
	router.POST("/signup", controllers.Signup())

	protected := r.Group("/")
	protected.Use(middleware.AuthMiddleware())


	{
		protected.GET("/users", controller.GetUsers())
		protected.GET("/users/:id", controller.GetUserByID())
	}
}