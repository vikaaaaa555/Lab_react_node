const {Membership, Instructor} = require('../models/models')
const ApiError = require('../error/apiError')

class MembershipController {
    async create(req, res) {
        const {type, description, price} = req.body
        const membership = await Membership.create({type, description, price})
        return res.json(membership)
    }

    async view(req, res) {
        const memberships = await Membership.findAll()
        return res.json(memberships)
    }
}
module.exports = new MembershipController()