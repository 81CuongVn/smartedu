package config

func GenerateRandomKey() string{
	bytes := make([]byte, 32)
	_, err := rand.Read(bytes)
	if err != nil{
		log.Fatal("Failed to generate key:", err)
	}
}