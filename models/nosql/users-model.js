const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: ['admin', 'user'],
            default: 'user'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('users', UserSchema);