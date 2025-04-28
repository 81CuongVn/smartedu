package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/yourmodule/authentication/config"
	"github.com/yourmodule/authentication/controllers"
	"github.com/yourmodule/authentication/helpers"
	"github.com/yourmodule/authentication/middleware"
	"github.com/yourmodule/authentication/routes"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	Key := helpers.GenerateRandomKey()
	helpers.SetJWTKey(Key)

	r := gin.Default()

	routes.SetupRoutes(r)

	//Start the server on port 8080
	r.Run(":" + port)
	log.Printf("Server started on port %s", port)
}