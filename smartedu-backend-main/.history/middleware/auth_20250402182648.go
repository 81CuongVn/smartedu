package middleware


func Authenticate()gin.HandlerFunc{
	return func(c *gin.Context){

		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(401, gin.H{"error": "Authorization header is missing"})
			c.Abort()
			return
		}
	}
}