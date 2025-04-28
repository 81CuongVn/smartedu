package main

import (
	"hello/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {

	Key:=GenerateRandomKey()
	SetJWTKey(Key)

	r:=gin.Default()

	routes.SetupRoutes(r)

	//Start the server on port 8080
	r.Run(":"+port)
	log.Printf("Server started on port %s", port)
}