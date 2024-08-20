import express from "express"
import Mongodb from './Config/db.js'
import authroute from './routes/Blog.js'
import cors from "cors"
import bodyParser from 'body-parser';

const app=express()
const PORT=8469;
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
app.use(express.static("public/uploads"))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api',authroute)

app.get('/',(req,res)=>{
 
 
    res.send("yup It is running ")
})





app.listen(PORT,async()=>{
    try {
        await Mongodb();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
    console.log(`Server is running on port http://localhost:${PORT}`);
})