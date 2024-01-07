const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const instructorRouter = require('./instructorRouter')
const workoutRouter = require('./workoutRouter')
const membershipRouter = require('./membershipRouter')
const enrollmentRouter = require('./enrollmentRouter')

router.use('/user', userRouter)
router.use('/instructor', instructorRouter)
router.use('/workout', workoutRouter)
router.use('/membership', membershipRouter)
router.use('/enrollment', enrollmentRouter)

module.exports = router