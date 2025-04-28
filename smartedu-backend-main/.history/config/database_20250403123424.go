package config

import (
	"context"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() *mongo.Client {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	MONGODB_URI := os.Getenv("MONGODB_URI")

	log.Println("Connecting to MongoDB...")
	clientOptions := options.Client().applyURI(MONGODB_URI)
	ctx, cancel := context.withTimeout(context.Background(), 60*time.Second)

	defer cancel()
	cilent, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("Failed to connect to MongoDB: %v", err)

	}

}
