package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r:=gin.Default()

	SetupRoutes(r)

	//Start the server on port 8080
	r.Run(":"+port)
	log.Printf("Server started on port %s", port)
}