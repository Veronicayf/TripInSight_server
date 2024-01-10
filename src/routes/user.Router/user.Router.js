const { Router } = require('express')

const { postUserHandler } = require('../../handlers/user_Handler/postUserHandler')
const { putUserHandler } = require('../../handlers/user_Handler/putUserHandler')
const { getUserHandler } = require('../../handlers/user_Handler/getUserHandler')
const { deleteUserHandler } = require('../../handlers/user_Handler/deleteUserHandler')

const userRouter = Router()

userRouter.post("/", postUserHandler)
userRouter.get("/", getUserHandler)
userRouter.put("/", putUserHandler)
userRouter.delete("/:id", deleteUserHandler)


module.exports = userRouter