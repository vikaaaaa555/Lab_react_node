const {Workout, Instructor, Membership} = require('../models/models')
const ApiError = require('../error/apiError')

class WorkoutController {

    async create(req, res) {
        const {type, description} = req.body
        const workout = await Workout.create({type, description})
        return res.json(workout)
    }

    async view(req, res) {
        const workouts = await Workout.findAll()
        return res.json(workouts)
    }
}
module.exports = new WorkoutController()