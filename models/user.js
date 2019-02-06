const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports.getUserByUsername = function(uname,callback){
    User.findOne({
        username: uname
    },callback);
}

module.exports = User;