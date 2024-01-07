const Router = require('express')
const router = new Router()
const enrollmentController = require('../controllers/enrollmentController')

router.post('/set_enrollment', enrollmentController.create)
router.get('/', enrollmentController.view)

module.exports = router