const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING},
    birth_date: {type: DataTypes.DATE},
    role: {type: DataTypes.STRING, defaultValue: 'USER', allowNull: false},
})

const Instructor = sequelize.define('instructor', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    photo: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    phone_number: {type: DataTypes.STRING},
})

const Workout = sequelize.define('workout', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
})

const Membership = sequelize.define('membership', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
})


const Enrollment = sequelize.define('enrollment', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    dateTime: {type: DataTypes.DATE, allowNull: false},
})

Membership.hasOne(User)
User.belongsTo(Membership)

User.belongsToMany(Workout, { through: Enrollment });
Workout.belongsToMany(User, { through: Enrollment });

Workout.belongsToMany(Instructor, { through: Enrollment });
Instructor.belongsToMany(Workout, { through: Enrollment });

Instructor.belongsToMany(User, { through: Enrollment });
User.belongsToMany(Instructor, { through: Enrollment });

module.exports = {
    User,
    Instructor,
    Workout,
    Membership,
    Enrollment
}