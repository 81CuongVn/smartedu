package main

import (
	"log"
	"authentication/helpers"
	"authentication/routes"
	"authentication/config"
	"github.com/gin-gonic/gin"
)

func main() {
	// Load environment variables from .env file
	err := helpers.LoadEnv("")
	if err != nil {
		log.Println("Warning: Error loading .env file:", err)
	}
	
	// Initialize JWT key from environment variables
	helpers.LoadJWTKeyFromEnv()

	Key:=config.GenerateRandomKey()
	helpers.SetJWTKey(Key)

	r:=gin.Default()

	routes.SetupRoutes(r)

	//Start the server on port 8080
	port:= "8080"
	r.Run(":"+ port)
	log.Printf("Server started on port %s", port)
}