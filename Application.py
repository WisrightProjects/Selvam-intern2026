from fastapi import FastAPI
# from pydantic import BaseModel

apps = FastAPI()

# Sample GET API
@apps.get("/items")
def get_items():
    return {"message": "Items API Working"}
# second try
@apps.get("/status")
def user_information():
    return {"message":"Your Application API Working Status Good"}
# Pydantic Model
# class User(BaseModel):
#     name: str
#     age: int
#     email: str

# # Store users
# users = []

# # POST API
# @app.post("/users")
# def create_user(user: User):
#     users.append(user.model_dump())

#     return {
#         "message": "User Added Successfully",
#         "total_users": len(users)
#     }

# API Creation
