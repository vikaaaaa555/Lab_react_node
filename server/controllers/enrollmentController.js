const {Enrollment, Workout} = require('../models/models')
const ApiError = require('../error/apiError')

class EnrollmentController {
    async create(req, res) {

    }

    async view(req, res) {
        const enrollments = await Enrollment.findAll()
        return res.json(enrollments)
    }

    async edit(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new EnrollmentController()