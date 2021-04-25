const mongoose = require('mongoose')
const { Schema } = mongoose; // cai khuong,

const userSchema = new Schema(
    {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        isMale: Boolean,
        birthday: String,
        created: { type: Date, default: Date.now }
    },
    {
        collection: 'Users'    // khai bao nhung cai o tren trong collection Users
    }
);

module.exports = mongoose.model('User', userSchema)