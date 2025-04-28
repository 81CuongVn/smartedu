package models

type User struct{
	ID primitive.ObjectID `json:"id" bson:"_id"`
	First_name *string
	Last_name *string
	Password *string
	Email	*string
	Phone	
	Token
	Role
	Refresh_token
	Created_at
	Updated_at
	User_id
}
