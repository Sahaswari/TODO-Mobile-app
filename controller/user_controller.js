const UserService = require('../services/user_servise');

exports.register = async(req, res,next)=>{
    try{
        const{email,password} = req.body;
        const successRes = await UserService.registerUser(email, password);
       // res.status(200).json({message:"User Registered Succesfully!"});
        res.json({status:true,success:"User create successfuly."});

    }catch(err){
        throw err;
    }
}