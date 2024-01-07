const Router = require('express')
const router = new Router()
const instructorController = require('../controllers/instructorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create_instructor', checkRole('ADMIN'), instructorController.create)
router.get('/', instructorController.view_all)
router.get('/:id', instructorController.view_one)
router.put('/edit_instructor/:id', checkRole('ADMIN'), instructorController.edit)
router.delete('/delete_instructor/:id', checkRole('ADMIN'), instructorController.delete)

module.exports = router