import Catmodel from "../model/Category_model.js"


export default class Categoryroute {
  static getallCat = async(req, res) => {
    try {
        const allcat=await Catmodel.find({})
        if(allcat){
            return res.status(200).json(allcat)
        }else{
            return res.status(400).json({message:"No Category is Saved"})
        }
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
  };
  static addnewCat = async(req, res) => {
    try {
        const{title}=req.body
        const ispresent=await Catmodel.findOne({title:title})
        if(!ispresent){
        const addcat=new Catmodel({
            title,
        })
       
        const issave=await addcat.save()

        if(issave){

            return res.status(200).json({message: "Category Added"})
        }
        else{
            return res.status(400).json({message: "add category"})
        }
    }else{
        return res.status(400).json({message: "This Category is Already present"})
    }
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
  };
}

