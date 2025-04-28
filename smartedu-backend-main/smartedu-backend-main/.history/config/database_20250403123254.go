package config

import (
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
)

func ConnectDB() *mongo.Client {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	MONGODB_URI := os.Getenv("MONGODB_URI")

	log.Println("Connecting to MongoDB...")
	clientOptions := options.Client().applyURI(MONGODB_URI)
	ctx, cancel := context.ư

}
