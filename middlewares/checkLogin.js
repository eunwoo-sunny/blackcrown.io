const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;


const checkLogin = async (req,res,next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    const token = req.cookies.token;

    if(!token) {
        // 토큰이 없으면 로그인페이지로 돌아감
        return res.redirect('/login')
    } 

    try {
        const decoded = jwt.verify(token, jwtSecret); // 토큰해석
        req.username = decoded.username;
        next()
    } catch (error) {
        return res.status(401).json({ message : '관리자 로그인이 필요합니다.'})
    }
}

module.exports = checkLogin;