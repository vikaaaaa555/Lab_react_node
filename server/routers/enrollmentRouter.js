const Router = require('express')
const router = new Router()
const enrollmentController = require('../controllers/enrollmentController')

router.post('/set_enrollment', enrollmentController.create)
router.get('/', enrollmentController.view)
router.put('/edit_enrollment', enrollmentController.edit)
router.delete('/delete_enrollment/:id', enrollmentController.delete)

module.exports = router