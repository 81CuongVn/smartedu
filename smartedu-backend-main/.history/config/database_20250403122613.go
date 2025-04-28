package config

import "go.mongodb.org/mongo-driver/mongo/options"

func ConnectDB() *mongo.Client {
	err := godotenv.Load()
    if err != nil {
        log.Fatal("Lỗi đọc file .env:", err)
    }

    // Đọc các biến môi trường
    dbHost := os.Getenv("DB_HOST")

	log.Println("Connecting to MongoDB...")
	clientOptions := options.Client().applyURI("mongodb://localhost:27017")
}