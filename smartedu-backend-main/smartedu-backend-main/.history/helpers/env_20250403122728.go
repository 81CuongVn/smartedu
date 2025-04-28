package helpers

import (
	"os"
	"sync"

	"github.com/joho/godotenv"
)

var envOnce sync.Once
var envLoadError error

// LoadEnv loads environment variables from .env file
// It uses sync.Once to ensure the .env file is loaded only once
func LoadEnv(filePath string) error {
	envOnce.Do(func() {
		// If filePath is empty, use default ".env"
		if filePath == "" {
			filePath = ".env"
		}
		envLoadError = godotenv.Load(filePath)
	})
	return envLoadError
}

// GetEnv retrieves an environment variable by key
// If the variable is not found, it returns the fallback value
func GetEnv(key string, fallback string) string {
	value := os.Getenv(key)
	if value == "" {
		return fallback
	}
	return value
}

// MustGetEnv retrieves an environment variable that must exist
// It panics if the variable is not set
func MustGetEnv(key string) string {
	value := os.Getenv(key)
	if value == "" {
		panic("Required environment variable not set: " + key)
	}
	return value
}
