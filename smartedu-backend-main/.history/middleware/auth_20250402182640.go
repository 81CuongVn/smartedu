package middleware


func Authenticate()gin.HandlerFunc{
	return func(c *gin.Context){

		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
	}
}