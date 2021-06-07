let UserService = require('../service/UserService.js');

class UserController{
    static async saveUser(req, res){
        try{
            let status = await UserService.saveUser(req.body);
            if(status != null){
                res.status(200).json({message : "Success"});
                console.log("User Added Successfully");
            }
        }
        catch(err){
            res.status(400).json({errorMessage : err.message});
        }
    }

}

module.exports = UserController;