import express from "express"
import * as dotenv from "dotenv"
import {v2 as cloudinary} from 'cloudinary'
import Post from "../models/Post.js"

dotenv.config()

const router = express.Router()
router.route('/')
.post((req,res)=>{
    res.send('posted something')
})

export default router