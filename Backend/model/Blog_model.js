import mongoose from "mongoose";

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categorie",
    },
    Description:{
        type:String,
        required:true,
    },
    Thumbnail:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})
export default mongoose.model("Blog",BlogSchema)