package routes

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	router.POST("/login", controller.Login())
	router.POST("/signup", Signup())

	protected := r.Group("/")
	{
		protected.GET("/users", controller.GetUsers())
		protected.GET("/users/:id", controller.GetUserByID())
	}
}