const Router = require('express')
const router = new Router()
const workoutController = require('../controllers/workoutController')

router.post('/create_workouts', workoutController.create)
router.get('/', workoutController.view)
router.put('/edit_workout/:id', workoutController.edit)
router.delete('/delete_workout/:id', workoutController.delete)

module.exports = router