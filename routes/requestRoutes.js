const express = require('express'); 
const router = express.Router();
const cookieParser = require('cookie-parser');
const checkLogin = require('../middlewares/checkLogin')
const {getAllRequests, createRequest, getRequest, updateRequest, deleteRequest, addRequestForm } = require('../controllers/requestController');
 

router.use(cookieParser())
router.route('/')
.get(checkLogin, getAllRequests)


router.route('/add')
.get(addRequestForm)
.post(createRequest)

router.route('/:id')
.get(checkLogin, getRequest)
.put(checkLogin, updateRequest)
.delete(checkLogin, deleteRequest)

module.exports = router;