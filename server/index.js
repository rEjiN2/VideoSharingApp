import express from  'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
dotenv.config()


const connect= ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to db");
    })
    .catch((err)=>
    {
        console.log("Error");
        throw err
    })
}
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(morgan('dev'))
app.use(express.json()) // Allow us to use and manipulate like retriving data from a form
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    
    next()
  })
app.use("/api/auth",authRoutes)
app.use("/api/users" ,userRoutes)
app.use('/api/comments' , commentRoutes)
app.use('/api/videos' , videoRoutes)

app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Something Went Wrong"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})


app.listen(5000,()=>{
    connect()
    console.log("Connected to Server");
})