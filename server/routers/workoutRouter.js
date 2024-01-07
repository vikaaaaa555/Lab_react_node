const Router = require('express')
const router = new Router()
const workoutController = require('../controllers/workoutController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create_workout', checkRole('ADMIN'), workoutController.create)
router.get('/', workoutController.view)

module.exports = router