package middleware

import (
	"authentication/helpers"
	"log"
	"net/http"
	"strings"
	"github.com/gin-gonic/gin"
)

func Authenticate() gin.HandlerFunc {
	return func(c *gin.Context) {

		authHeader := c.GetHeader("Authorization")
		log.Printf("Raw Authorization Header: %s", authHeader) // Log the raw header



		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is missing"})
			c.Abort() // Dừng toàn bộ chuỗi xử lý
			return
		}
		// Remoce Bearer token
		authHeader = strings.TrimPrefix(authHeader, "Bearer ")
		claims, err:= helpers.ValidateToken(authHeader)
		if err != nil {
			log.Printf("Token validation error: %v", err) // Log the validation error
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}
		c.Set("claims", claims)
		c.Next() // Cho phép tiếp tục nếu token hợp lệ
	}
	
}