# # from fastapi import FastAPI
# # app = FastAPI()
# # # get method
# # @app.get("/welcome")
# # def Welcome():
# #     return{"message":"This is my first api creation thanks for visiting my api page"}

# # # create one person full detailse
# # @app.get("/user")
# # def user_limite():
# #     return{
# #         "name" : "selvam",
# #         "age" : 22,
# #         "location" : "Kallakurichi",
# #         "Working role" : "Full Stack developer"
# #     }
# # from fastapi import FastAPI

# # app = FastAPI()

# # @app.get("/userinputs")
# # def userinputs():
# #     return {
# #         "name": "Selvam Sakthivel",
# #         "age": 22,
# #         "email_id": "selvamvel4378@gmail.com",
# #         "phone_number": "8637418638",
# #         "gender": "Male"
# #     }

# # from fastapi import FastAPI
# # apps = FastAPI()
# # @apps.get("/userinputs")
# # def userinputs():
# #     return{
# #         "name" : "Selvam Sakthivel",
# #         "age" : 22,
# #         "email Id" : "selvamvel4378@gmail.com",
# #         "emailpassword" : "chandruvel4378",
# #         "phone number" : "8637418638",
# #         "gender" : "Male"
# #     }

# # day 26
# from fastapi import FastAPI
# from pydantic import BaseModel
# apps = FastAPI()
# @apps.get("/items")
# def apped():
#     return{
#         "food" : "Rich",
#         "price" : 230
#     }

# @apps.get("/user/{user_id}")
# def user_code(user_id:int):
#     if(user_id == 1):
#         return{
#         "name" : "Selvam S",
#         "email"  : "selvamvel4378@gmail.com",
#         "phone" : 8637418638,
#         "mail code" : 4561
#     }
#     else:
#         return{
#             "name" : "Unknown",
#             "id" : "Pleasecheck"
#         }
# class User(BaseModel):
#     name : str
#     age : int
#     email : str
# users = []

# @apps.post("/users")
# def create_user(user:User):
#     users.append(user.dict())
#     return {"Message":"User Added Successfully","total User":len(users)}


# Correct code in api get and post
# from fastapi import FastAPI
# from pydantic import BaseModel

# apps = FastAPI()

# # Sample GET API
# @apps.get("/items")
# def get_items():
#     return {"message": "Items API Working"}

# # Pydantic Model
# class User(BaseModel):
#     name: str
#     age: int
#     email: str

# # Store users
# users = []

# # POST API
# @apps.post("/users")
# def create_user(user: User):
#     users.append(user.dict())
#     return {
#         "Message": "User Added Successfully",
#         "total User": len(users)
#     }

# Pydantic
# class User(BaseModel):
#     name : str
#     mark : int
#     result : str
# # srore variable
# user_inputs = []
# # post method
# @apps.post("/result")
# def input_code(user : User):
#     user_inputs.append(user.dict())
#     return{
#         "Message": "User Result Sended Successfully",
#         "Total user" : len(user_inputs)
#     }



# from fastapi import FastAPI
# from pydantic import BaseModel

# app = FastAPI()

# # Sample GET API
# @app.get("/items")
# def get_items():
#     return {"message": "Items API Working"}

# # Pydantic Model
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


