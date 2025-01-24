import mysql from 'mysql2'
import { DB_NAME,DB_USER } from "../constants.js" 

export const dbcreation=async()=>{
const db = mysql.createConnection({
        host: 'localhost',
        user: DB_USER,
        password: "",
        database: DB_NAME
    }
)

await db.connect((err) => {
    try{
        console.log("Connected to MySQL database");
    }catch(e){
        console.error("Error connecting to MySQL:", err.message);
        process.exit(1);
    }
  });
}