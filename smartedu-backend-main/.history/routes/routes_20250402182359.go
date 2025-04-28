package routes

import (
	""hello/controllers""

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.POST("/login", controllers.Login())
	router.POST("/signup", controllers.Signup())

	protected := r.Group("/")
	protected.Use(middleware.AuthMiddleware())


	{
		protected.GET("/users", controllers.GetUsers())
		protected.GET("/users/:id", controllers.GetUserByID())
	}
}