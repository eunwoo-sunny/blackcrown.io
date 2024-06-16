const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true, // 중복불가
    },
    password : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('User', UserSchema)