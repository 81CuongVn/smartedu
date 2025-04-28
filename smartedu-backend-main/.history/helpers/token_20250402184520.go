package helpers
import "github.com/golang-jwt/jwt"
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`

	jwt.StandardClaims

}

var jwtKey []byte
func SetJWTKey(key string) {
	jwtKey =[]byte

}

func GetJWTKey() []byte{
	return []byte(jwtKey)
}




func ValidateToken(tokenString string)(Claims, error) {
	secretKey := 

}