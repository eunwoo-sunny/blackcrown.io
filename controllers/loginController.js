const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const getLogin = (req,res) => {
    res.render('login')
}

const loginUser = asyncHandler(async(req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username})
    if(!user) {
        return res.status(401).json({ message: '일치하는 사용자가 없습니다.'})
    }

    // 입력된 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        return res.status(401).json({ message : '비밀번호가 틀려요'})
    }

    // JWT 토큰생성
    const token = jwt.sign({id : user._id }, jwtSecret);

    // 생성된 토큰을 쿠키에 저장
    res.cookie('token', token, { httpOnly :true})

    // 로그인성공
    res.redirect('/request')
})

const logout = (req,res) => {
    res.clearCookie('token');
    res.redirect('/')
} 

const getRegister = (req,res) => {
    res.render('register')
}

module.exports = { getRegister, getLogin, loginUser, logout }