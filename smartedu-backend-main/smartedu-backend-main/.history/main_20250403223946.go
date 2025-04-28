package main

import (
	"authentication/config"
	"authentication/helpers"
	"authentication/routes"
	"log"
	"time"
	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

func main() {

	Key := config.GenerateRandomKey()
	helpers.SetJWTKey(Key)

	r := gin.Default()

	// Add CORS middleware
    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"*"},  // Adjust this in production to specific origins
        AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))


	routes.SetupRoutes(r)

	//Start the server on port 8080
	port := "8080"
	r.Run(":" + port)
	log.Printf("Server is running on http://localhost:%s", port)
}
