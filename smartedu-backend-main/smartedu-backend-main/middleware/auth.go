// Package middleware chứa các xử lý liên quan đến middleware
package middleware

import (
    "authentication/helpers"  // Package tự tạo cho các helper xác thực
    "log"                     // Ghi log
    "net/http"                // Xử l HTTP status code
    "strings"                 // Thao tác với chuỗi
    "github.com/gin-gonic/gin" // Framework web Gin
)

// Middleware xác thực JWT
func Authenticate() gin.HandlerFunc {
    return func(c *gin.Context) {
        // Bước 1: Lấy Authorization header từ request
        authHeader := c.GetHeader("Authorization")
        log.Printf("Raw Authorization Header: %s", authHeader) // Ghi log để debug

        // Bước 2: Kiểm tra header tồn tại
        if authHeader == "" {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is missing"})
            c.Abort() // Dừng chuỗi middleware ngay lập tức
            return
        }

        // Bước 3: Tách token từ chuỗi "Bearer"
        authHeader = strings.TrimPrefix(authHeader, "Bearer ") // Xóa prefix "Bearer " nếu có
        
        // Bước 4: Xác thực token
        claims, err := helpers.ValidateToken(authHeader)
        if err != nil {
            log.Printf("Token validation error: %v", err) // Log lỗi chi tiết
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
            c.Abort()
            return
        }

        // Bước 5: Lưu thông tin giải mã vào context
        c.Set("claims", claims) // Cho phép các handler sau truy cập claims
        
        // Bước 6: Cho phép request đi tiếp sang middleware/handler tiếp theo
        c.Next()
    }
}
