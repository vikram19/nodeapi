const User = require('./models/user');
const express = require('express');
const router = express.Router();

router.get('/register',(req,res)=>{
    var newUser = new User({
        name: "namesds",
        username: "username",
        password: "bdvjchdsbjc"
    });
    newUser.save(callback);
    function callback(err, user){
        if(err){
            res.status(500).json({success: false, msg: err});
        }else{
            res.status(200).json({success: true, user: user});
        }
    }
});

router.post('/login',(req,res)=>{
    const uname = req.body.username;
    const pass = req.body.password;

    User.getUserByUsername(uname,(err,user)=>{
        if(err){
            res.status(500).json({success:false , msg: 'Internal Server Error'});
        } else{
            var userToSend = {
                id: user._id,
                name: user.name,
                mobile: user.mobile,
                username: user.username
            }
            res.status(200).json({success: true, msg: 'User Found', user: userToSend});
        }
    });
});

router.get('/AllUsersList',(req,res)=>{
    // Get All Users From Database
    User.find(callback);
    function callback(err, users){
        if(err){
            res.status(500).json({success: false, msg: err});
        }else{
            res.status(200).json({success: true, users: users});
        }
    }
})

module.exports = router;