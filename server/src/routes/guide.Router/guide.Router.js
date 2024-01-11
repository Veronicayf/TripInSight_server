const { Router } = require('express')

const { postGuideHandler } = require('../../handlers/guide.Handler/guide.postHandler')
const { putGuideHandler } = require('../../handlers/guide.Handler/guide.putHandler')
// const { getGuideHandler } = require('../../handlers/guide.Handler/guide.getHandler')
const { deleteGuideHandler } = require('../../handlers/guide.Handler/guide.deleteHandler')

const guideRouter = Router()

guideRouter.post("/", postGuideHandler)
guideRouter.put("/", putGuideHandler)
// guideRouter.get("/", getGuideHandler)
guideRouter.delete("/:id", deleteGuideHandler)


module.exports = guideRouter