import blogmodel from "../model/Blog_model.js"
import mongoose from "mongoose"
class blogroute{
    static getallblog= async(req,res)=>{
        try {
            const allblog=await blogmodel.find({user:req.user._id})
            if(allblog){
                return res.status(200).json(allblog)
            }
            else{
                return res.status(400).json({message: "error"})
            }
        } catch (error) {
            return res.status(400).json({message: message.error})
        }
    }
    static createblog = async (req, res) => {
        try {
          const { title, Category, Description } = req.body;
    
          // console.log("Request Body:", req.body);
          // console.log("Request File:", req.file);
          // console.log("Request User:", req.user);
          
    
          if (!title || !Category || !Description) {
            return res.status(400).json({ message: "All fields are required" });
          }
    
          if (!req.file) {
            return res.status(400).json({ message: "File upload failed" });
          }
    
          if (!req.user || !req.user._id) {
            return res.status(400).json({ message: "User authentication failed" });
          }

          if(Description.length<100){
            return res.status(400).json({message:"Description is too Short"})
          }
    
          const newblog = new blogmodel({
            title,
            Category,
            Description,
            Thumbnail: req.file.filename,
            user: req.user._id,
          });
    
          const issave = await newblog.save();
          if (issave) {
            return res.status(201).json({ message: "Blog saved" });
          } else {
            return res.status(400).json({ message: "Fill correct data" });
          }
        } catch (error) {
          console.log("Error in createblog:", error); // Debugging
          return res.status(500).json({ message: error.message });
        }
      };
    
      
    static getoneblog=async(req,res)=>{
       const {id}=req.params
       try {
            const fetch=await blogmodel.findById(id)
            if (fetch) {
                return res.status(200).json(fetch)

            } else {
                return res.status(400).json({message: "invalid id"})

            }
       } catch (error) {
        return res.status(400).json({message: error.message})

       }

    }
}

export default blogroute