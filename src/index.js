import dotenv from "dotenv"
import {dbcreation }from './db/database.js'
import {app} from "./app.js"

dotenv.config({
    path: './env'
})
// database>
dbcreation().then(
    ()=> app.listen(process.env.PORT || 8000 ,()=>
    console.log(`server is running on port ${process.env.PORT || 8000}`))
).catch((e)=>{
    console.log(e);
})