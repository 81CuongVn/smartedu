package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type User struct {
	ID            primitive.ObjectID `json:"id" bson:"_id"`
	First_name    *string            `json:"first_name" validate:"required, min=2, max=100"`
	Last_name     *string            `json:"last_name" validate:"required, min=2, max=100"`
	Password      *string            `json:"password" validate:"required, min=6"`
	Email         *string
	Phone         *string
	Token         *string
	Role          *string
	Refresh_token *string
	Created_at    time.Time
	Updated_at    time.Time
	User_id       string
}
