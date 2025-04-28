package helpers

import (
	"errors"
	"github.com/golang-jwt/jwt"
)

// Claims định nghĩa cấu trúc thông tin chứa trong JWT
// Kế thừa jwt.StandardClaims để có các trường thông tin chuẩn
type Claims struct {
	Username string `json:"username"` // Tên người dùng
	Email    string `json:"email"`    // Địa chỉ email
	Role     string `json:"role"`     // Vai trò người dùng

	jwt.StandardClaims // Các trường thông tin chuẩn của JWT (expiration time, issuer, etc.)
}

// jwtKey lưu trữ secret key dùng để ký và xác thực JWT
var jwtKey []byte

// SetJWTKey thiết lập secret key từ chuỗi đầu vào
// Hàm này cần được gọi trước khi sử dụng các chức năng JWT
func SetJWTKey(key string) {
	jwtKey = []byte(key)
}

// GetJWTKey trả về secret key dạng byte slice
// Đảm bảo an toàn bằng cách trả về bản copy của key
func GetJWTKey() []byte {
	return []byte(jwtKey)
}

// ValidateToken xác thực và phân tích JWT từ chuỗi token
// Trả về claims nếu token hợp lệ, error nếu không hợp lệ
func ValidateToken(tokenString string) (*Claims, error) {
	secretKey := GetJWTKey()
	
	// Phân tích token với custom claims
	token, err := jwt.ParseWithClaims(
		tokenString,
		&Claims{},
		func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		},
	)

	if err != nil {
		return nil, err // Trả về lỗi nếu có lỗi trong quá trình parse
	}

	// Kiểm tra kiểu claims và tính hợp lệ của token
	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	}
	
	return nil, errors.New("invalid token") // Token không hợp lệ
}


func HashPassword()