package main

import (
	"log"
	"authentication/helpers"
	"authentication/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	Key:=configsGenerateRandomKey()
	helpers.SetJWTKey(Key)

	r:=gin.Default()

	routes.SetupRoutes(r)

	//Start the server on port 8080
	r.Run(":"+port)
	log.Printf("Server started on port %s", port)
}