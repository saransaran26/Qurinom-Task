import express from 'express'
import Post from '../models/post.js'


const router = express.Router()

router.post('/create',async(req,res)=>{
    try {
        const newpost = new Post(req.body)
        const saved = await newpost.save()
        res.status(201).send(saved)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/',async(req,res)=>{
    try {
        const data = await Post.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/getbyid/:id',async(req,res)=>{
    try {
        const data = await Post.findById(req.params.id)
        if(data){
            res.status(200).send(data)
        }
        else{
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/update/:id',async(req,res)=>{
    try {
        const data = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(data){
            res.status(200).send(data)
        }
        else{
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const data = await Post.findByIdAndDelete(req.params.id)
        if(data){
            res.status(200).send(data)
        }
        else{
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})



export default router