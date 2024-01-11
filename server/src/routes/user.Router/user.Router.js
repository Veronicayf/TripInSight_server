const { Router } = require('express')

const { postUserHandler } = require('../../handlers/user.Handler/user.postHandler')
const { putUserHandler } = require('../../handlers/user.Handler/user.putHandler')
const { getUserHandler } = require('../../handlers/user.Handler/user.getHandler')
const { deleteUserHandler } = require('../../handlers/user.Handler/user.deleteHandler')

const userRouter = Router()

userRouter.post("/", postUserHandler)
userRouter.get("/", getUserHandler)
userRouter.put("/", putUserHandler)
userRouter.delete("/:id", deleteUserHandler)


module.exports = userRouter