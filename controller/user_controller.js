const UserService = require('../services/user_servise');

exports.register = async(req, res,next)=>{
    try{
        const{email,password} = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.josn({status:true,success:"User Registered Succesfully!"});
        
    }catch(err){
        throw err;
    }
}