package helpers
import (
	"errors"

	"github.com/golang-jwt/jwt"
)
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`

	jwt.StandardClaims

}

var jwtKey []byte
func SetJWTKey(key string) {
	jwtKey =[]byte(key)

}

func GetJWTKey() []byte{
	return []byte(jwtKey)
}

func ValidateToken(tokenString string)(*Claims, error) {
	secretKey := GetJWTKey()
	token, err:= jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})
	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	}
	return nil, errors.New("invalid token")
}