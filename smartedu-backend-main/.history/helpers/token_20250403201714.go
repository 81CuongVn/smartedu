package helpers

import (
	"authentication/config"
	"context"
	"errors"
	"time"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

// Claims định nghĩa cấu trúc thông tin chứa trong JWT
// Kế thừa jwt.StandardClaims để có các trường thông tin chuẩn
type Claims struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"` // Địa chỉ email
	Role   string `json:"role"`  // Vai trò người dùng

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

func GenerateToken(email, userID, userType string) (string, string) {
	tokenExpiry := time.Now().Add(24 * time.Hour).Unix()
	refreshTokenExpiry := time.Now().Add(7 * 24 * time.Hour).Unix()

	claims := &Claims{
		Email:  email,
		UserID: userID,
		Role:   userType,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: tokenExpiry,
		},
	}

	refeshClaims := &Claims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: refreshTokenExpiry,
		},
	}
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedAccessToken, err := accessToken.SignedString(jwtKey)
	if err != nil {
		panic(err)
	}
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, refeshClaims)
	signRefreshToken, err := refreshToken.SignedString(jwtKey)

	if err != nil {
		panic(err)
	}
	return signedAccessToken, signRefreshToken
}

func HashPassword(password *string) *string {

	bytes, err := bcrypt.GenerateFromPassword([]byte(*password), bcrypt.DefaultCost)
	if err != nil {
		panic((err))
	}
	hashedPwd := string(bytes)
	return &hashedPwd
}


func UpdateAllTokens(signedToken, signedRefreshToken, userID string) error{
	ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	defer cancel()

	userCollection := config.OpenCollection("users")

	updateObj := bson.D{
		{"$set", bson.D{
			
		}
	}
}