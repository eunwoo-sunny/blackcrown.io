const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
 

const getRegister = (req,res) => {
    res.render('register')
}

const registerUser = asyncHandler( async (req,res) => {
    const { username, password, password2} = req.body;
    if(password === password2) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password : hashedPassword})
        res.status(201).json({ message : 'Register successful', user})
    } else {
        res.send('Register Faild')
    }
})

module.exports = { getRegister, registerUser }