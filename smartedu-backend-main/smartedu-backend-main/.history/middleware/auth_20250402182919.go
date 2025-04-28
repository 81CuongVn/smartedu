package middleware

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func Authenticate() gin.HandlerFunc {
	return func(c *gin.Context) {

		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is missing"})
			c.Abort()
			return
		}
	}
	// Remoce Bearer token
	authHeader := strings.TrimPrefix(authHeader, "Bearer ")
	claims, err:= Validate
}