const {Instructor, Workout} = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class InstructorController {

    async create(req, res, next) {
        try {
            const {name, email, phone_number} = req.body
            const {photo} = req.files
            let filename = uuid.v4() + '.jpg'
            photo.mv(path.resolve(__dirname, '..', 'static', filename))

            const instructor = await Instructor.create({name, photo: filename, email, phone_number})
            return res.json(instructor)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async view_all(req, res, next) {
        try {
            const { sortBy, sortOrder } = req.query
            const validSortOrders = ['asc', 'desc']
            const order = validSortOrders.includes(sortOrder) ? sortOrder : 'asc';

            const sortByField = sortBy || 'name'

            const instructors = await Instructor.findAll({
                attributes: ['id', 'name'],
                order: [[sortByField, order]],
            });

            return res.json(instructors)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async view_one(req, res, next) {
        try {
            const { id } = req.params;

            const instructor = await Instructor.findByPk(id, {
                attributes: ['name', 'email', 'phone_number'],
            });

            if (!instructor) {
                return res.status(404).json({ error: 'Instructor not found' });
            }

            return res.json(instructor);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async edit(req, res) {

    }

    async delete(req, res) {

    }

}

module.exports = new InstructorController()