import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 9090;

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listning on PORT: ${PORT}`);
    })
})
.catch((err)=>{
    console.log("MoongoDB connection error", err);
})