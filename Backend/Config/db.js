import mongoose from "mongoose";

const Mongodb=async()=>{
    try{
        const res= await mongoose.connect('mongodb://localhost:27017/Blog')
        
        console.log("Database Connected");

    }catch(error){
        console.error("Database connection error:",error);
    }
}
export default Mongodb