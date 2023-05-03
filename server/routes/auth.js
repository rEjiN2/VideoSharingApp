import express from 'express';
import {  } from '../controllers/video.js';
import { google, signIn, signUp } from '../controllers/auth.js';

const router = express.Router();

// Create a User
router.post("/signUp", signUp)



//SignIn
router.post("/signIn",signIn)



//Google Authentication
router.post("/googleAuth",google)



export default router;