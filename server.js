import express from "express"
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js";
import postRouter from "./routes/postRoutes.js"
import dalleRouter from "./routes/dalleRoutes.js"
dotenv.config();
connectDB()


const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.get('/', async(req,res) => {
    res.send('hello')
})

// routes 
app.use("/api/post", postRouter)
app.use("/api/dalle", dalleRouter)

app.listen(3000, () => console.log('server started on port ' + 3000))