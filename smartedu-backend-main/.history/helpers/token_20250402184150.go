package helpers
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Role     string `json:"role"`

	jwt.
}
func ValidateToken(tokenString string)(Claims, error) {

}