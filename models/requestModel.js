const mongoose = require('mongoose');
const requestScheme = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : [ true, '연락받으실 전화번호를 꼭 입력해주세요']
        },
        msg : {
            type : String, 
        }
    },
    {
        timestamps : true,
    }
);

const Request = mongoose.model('Request',   requestScheme); 
module.exports = Request;