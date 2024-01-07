const Router = require('express')
const router = new Router()
const membershipController = require('../controllers/membershipController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create_membership', checkRole('ADMIN'), membershipController.create)
router.get('/', membershipController.view)

module.exports = router;
