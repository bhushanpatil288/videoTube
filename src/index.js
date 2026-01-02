import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 9090;

app.listen(PORT, ()=>{
    console.log(`listning on PORT: ${PORT}`);
})