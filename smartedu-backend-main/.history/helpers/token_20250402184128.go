package helpers
type Claims struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}
func ValidateToken(tokenString string)(Claims, error) {

}