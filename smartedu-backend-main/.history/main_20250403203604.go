package main

import (
	"authentication/config"
	"authentication/helpers"
	"authentication/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {

	Key := config.GenerateRandomKey()
	helpers.SetJWTKey(Key)

	r := gin.Default()

	routes.SetupRoutes(r)

	//Start the server on port 8080
	port := "8080"
	r.Run(":" + port)
	log.Println("Serever is running on http://localhost:%s", port)
}
