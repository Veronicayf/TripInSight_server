const { Router } = require('express')

const { postAdminHandler } = require('../../handlers/admin.Handler/admin.postHandler')
const { putAdminHandler } = require('../../handlers/admin.Handler/admin.putHandler')
const { getAdminHandler } = require('../../handlers/admin.Handler/admin.getHandler')
const { deleteAdminHandler } = require('../../handlers/admin.Handler/admin.deleteHandler')

const adminRouter = Router()

adminRouter.post("/", postAdminHandler)
adminRouter.get("/", getAdminHandler)
adminRouter.put("/", putAdminHandler)
adminRouter.delete("/:id", deleteAdminHandler)


module.exports = adminRouter