package helpers
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`

	jwt.Stand
}
func ValidateToken(tokenString string)(Claims, error) {

}