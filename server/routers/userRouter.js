const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.put('/edit_profile',userController.edit)
router.delete('/delete_profile/:id', userController.delete)

module.exports = router