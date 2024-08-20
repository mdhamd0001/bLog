import Auth_module from '../model/Auth_model.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


class AuthController {
    static userRegistration = async (req, res) => {
        try {
            const{name,email,password}=req.body
            if(name&&email&&password){
            const isUser= await Auth_module.findOne({email:email})
            if(!isUser){
                if(password.length<5){
                    return res.status(400).json({message:"Password Not Accepted"})
                }
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

              const newuser=new Auth_module({
                name,
                email,
                password:hashedPassword,
              })
               const save= await newuser.save()
               if(save){
               
                return res.status(200).json({message:"User Register", success: true})
               }
            }else{
                return res.status(200).json({message:"email already register",success:false})
            }
            }else{ 
                alert("fill all entries")

                return res.status(400).json({message: error.message})}
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    };

    static userLogin = async (req, res) => {
        const {email,password}=req.body
        try {
            if(email&&password){
                const isuser=await Auth_module.findOne({email:email})
                 if(isuser){
                   const ismatch=await bcrypt.compare(password,isuser.password)
                   if(ismatch){
                    const token=jwt.sign({ userId: isuser._id, email: isuser.email },
                        "mdhs",
                        { expiresIn: '1d' })
                    return res.status(200).json({message:"User Logedin", success:true,token,name:isuser.name})
                   }
                   else{
                    return res.status(400).json({message:"Wrong password"})
                   }
                 }
                 else{
                    return res.status(400).json({message:"Make a account "})
                 }
            }else{
             
             return res.status(400).json({message:"fill up the form"})
            }
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    };
}

export default AuthController;
