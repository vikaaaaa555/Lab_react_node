const { Enrollment, Workout, User, Instructor } = require('../models/models')
const ApiError = require('../error/apiError')

class EnrollmentController {
    async create(req, res, next) {
        try {
            const { userId, workoutId, instructorId, dateTime } = req.body
            const isTimeSlotOccupied = await Enrollment.findOne({
                where: {
                    instructorId: instructorId,
                    dateTime: {
                        $between: [new Date(dateTime), new Date(dateTime).setHours(new Date(dateTime).getHours() + 2)],
                    },
                },
            })
            if (isTimeSlotOccupied) {
                return next(ApiError.badRequest('The time slot is already occupied.'));
            }
            const enrollment = await Enrollment.create({
                userId: userId,
                workoutId: workoutId,
                instructorId: instructorId,
                dateTime: dateTime,
            })
            return res.json(enrollment);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async view(req, res, next) {
        try {
            const enrollments = await Enrollment.findAll();
            return res.json(enrollments);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new EnrollmentController();