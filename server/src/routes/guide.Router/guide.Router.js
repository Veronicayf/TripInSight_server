const { Router } = require('express')
const { check } = require('express-validator')

const { postGuideHandler } = require('../../handlers/guide.Handler/guide.postHandler')
const { putGuideHandler } = require('../../handlers/guide.Handler/guide.putHandler')
const { getGuideHandler } = require('../../handlers/guide.Handler/guide.getHandler')
const { getAllGuideHandler } = require('../../handlers/guide.Handler/guide.getAllGuideHandler')
const { deleteGuideHandler } = require('../../handlers/guide.Handler/guide.deleteHandler')

const guideRouter = Router()

guideRouter.post("/", 

      [
        check('forename', 'Name should not be empty').not().isEmpty().isString(),
        check('forename', 'Name should be a string').isString(),
        check('forename', 'Name should have a length of 2 to 50 characters').isLength({ min: 2, max: 50 }),

        check('surname', 'Lastname should not be empty').not().isEmpty().isString(),
        check('surname', 'Lastname should be a string').not().isEmpty().isString(),
        check('surname', 'Lastname should have a length of 2 to 50 characters').not().isEmpty().isString(),

        check('nationality', 'Invalid nationality format').not().isEmpty().isString(),

        check('birthDate', 'Invalid birthdate format').not().isEmpty().isISO8601(),
        
        check('biography', 'Invalid biography format').not().isEmpty().isString(),

       ],
           postGuideHandler)
guideRouter.put("/", putGuideHandler)
guideRouter.get("/", getAllGuideHandler)

guideRouter.get("/:id",
     [
      check('id', 'invalid id format').not().isEmpty().isUUID()
     ],
getGuideHandler)

guideRouter.delete("/:id",
     [
     check('id', 'invalid id format').not().isEmpty().isUUID()
     ],
deleteGuideHandler)


module.exports = guideRouter