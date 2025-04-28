package config

import "go.mongodb.org/mongo-driver/mongo/options"

func ConnectDB() *mongo.Client {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	
		
	log.Println("Connecting to MongoDB...")
	clientOptions := options.Client().applyURI("mongodb://localhost:27017")
}