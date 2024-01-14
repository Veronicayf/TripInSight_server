const { Router } = require('express')
const { check } = require('express-validator')

const { postGuideHandler } = require('../../handlers/guide.Handler/guide.postHandler')
const { putGuideHandler } = require('../../handlers/guide.Handler/guide.putHandler')
const { getGuideHandler, getAllGuidesHandler } = require('../../handlers/guide.Handler/guide.getHandler')
const { deleteGuideHandler } = require('../../handlers/guide.Handler/guide.deleteHandler')

const guideRouter = Router()

guideRouter.post("/", 

      [
        check('forename', 'Invalid name format').not().isEmpty().isString(),
        check('surname', 'Invalid surname format').not().isEmpty().isString(),
        check('nationality', 'Invalid nationality format').not().isEmpty().isString(),
        // check('birthDate', 'Invalid birthdate format').not().isEmpty().isDate(),
        check('biography', 'Invalid biography format').not().isEmpty().isString(),

       ],
           postGuideHandler)
guideRouter.put("/", putGuideHandler)
guideRouter.get("/:id",
     [
      check('id', 'invalid id format').not().isEmpty().isUUID()
     ],
getGuideHandler)
guideRouter.get("/", getAllGuidesHandler)
/guideRouter.delete("/:id", deleteGuideHandler)

module.exports = guideRouter