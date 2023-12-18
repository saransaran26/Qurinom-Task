import express from 'express'
import Data from '../models/data.js'

const router = express.Router()

router.post('/postdata',async(req,res)=>{
    //console.log(req.body);
    const data = new Data(req.body)
    try {
        const saved = await data.save()
        res.status(201).send(saved)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/',async(req,res)=>{
    try {
        const data = await Data.find()
        // if(!data){
        //     return res.status(400).send("No data found")
        // }
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router