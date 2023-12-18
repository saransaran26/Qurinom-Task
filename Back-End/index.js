import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import userRoutes from './routes/userRoute.js'
import dataRoute from './routes/dataRoute.js'
import postRoute from './routes/postRoute.js'

const app = express()
app.use(cors())
app.use(express.json({limit:"10mb"}))
const MONGODBURL =
  "mongodb+srv://saranchakravarthy26:saran@mern.btfsbi4.mongodb.net/?retryWrites=true&w=majority";
  
mongoose.connect(MONGODBURL)
.then(()=>console.log("connected to MongoDB"))
.catch((error)=>console.log(error))


// const storage = multer.diskStorage({
//   destination:(req,file,cb) => {
//       cb(null,"images")
//   },
//   filename:(req,file,cb) => {
//       cb(null,req.body.img)
//   }
// })
// file.fieldname + "_" + Date.now() + path.extname(file.originalname)
// const upload = multer({storage:storage})
// console.log(upload.single("file"));
// app.post('/upload',upload.single("file"),(req,res)=>{
//   console.log("Image Uploaded");
//   res.status(200).send("Uploaded Successfully")
// })

app.use('/api/user',userRoutes)
app.use('/api/data',dataRoute)
app.use('/api/post',postRoute)


app.listen(4000,()=>{
    console.log("server is connected in port 4000");
})