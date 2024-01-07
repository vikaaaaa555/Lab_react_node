const Router = require('express')
const router = new Router()
const membershipController = require('../controllers/membershipController')

router.post('/create_membership', membershipController.create)
router.get('/', membershipController.view)
router.put('/edit_membership/:id', membershipController.edit)
router.delete('/delete_membership/:id', membershipController.delete)

module.exports = router;
