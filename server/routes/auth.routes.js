import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js'

const router = express.Router()

//Signup Rout
router.post('/signup', signup)

//Login Rout
router.post('/login', login)
router.post('/logout', logout)

export default router