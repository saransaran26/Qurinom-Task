import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register',async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(400).send("User already registerted")
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const updateduser = new User({email,password:hashedPassword})
        await updateduser.save()
        res.status(200).send(updateduser)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({ error: "User not yet Registered" });
        }
        const matchedpass = await bcrypt.compare(password,user.password)
        if(!matchedpass){
            return res.status(401).json({ error: "Incorrect password" });
        }
        const token = jwt.sign({id:user._id},"GUVI@12")
        const {password:hashedPassword,...rest} = user._doc
        res.cookie('access token',token,{httpOnly:true}).status(200).send(rest)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router