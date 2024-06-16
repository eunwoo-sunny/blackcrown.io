const asyncHandler = require('express-async-handler');
const Request = require('../models/requestModel');
const path = require('path');
 

const getAllRequests = asyncHandler( async (req,res) => {
    const requests = await Request.find(); 
    res.render('index', { requests:requests})
})

const addRequestForm = (req,res) => {
    res.render('add')
}

const createRequest = asyncHandler( async (req,res) => {
    const { name, email, phone, msg} = req.body;
    if(!name || !email || !phone || !msg ) {
        return res.status(400).send('필수값이 입력되지 않았습니다')
    }

    const contact = await Request.create({ name,email,phone, msg})
    // res.status(201).send('Create Request')
    res.redirect('/request')
})

const getRequest = asyncHandler(async(req,res) => {
    const request = await Request.findById(req.params.id);
    res.render('update', {request : request}) 
})

const updateRequest = asyncHandler(async(req,res) => {
    const id = req.params.id;
    const { name, email, phone , msg } = req.body;

    const updateRequest = await Request.findByIdAndUpdate(
        id,
        {name,email,phone,msg},
        {new :true}
    );
    res.redirect('/request')
})

const deleteRequest = asyncHandler(async(req,res) => {
    await Request.findByIdAndDelete(req.params.id);
    res.redirect('/request'); 
})



module.exports = { getAllRequests, createRequest, getRequest, updateRequest, deleteRequest, addRequestForm};
