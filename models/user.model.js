const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String
    },
    email : {
        type: String,
        unique : true
    },
    age : {
        type: Number
    }
}, {
    timestamps : true
})


const User = mongoose.model('user', userSchema);


module.exports = { User }