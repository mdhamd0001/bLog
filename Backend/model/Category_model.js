import mongoose from "mongoose";

const catSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
})

export default mongoose.model("Categorie",catSchema)
