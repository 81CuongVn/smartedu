package helpers
import "github.com/golang-"
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`

	jwt.StandardClaims

}
func ValidateToken(tokenString string)(Claims, error) {

}