import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// auth User & get token 
// POST /api/users/login
// public
const authUser = asyncHandler(async (req, res) => {
  const body = req.body
  res.status(201).send(body) 
})

export { 
    authUser
}