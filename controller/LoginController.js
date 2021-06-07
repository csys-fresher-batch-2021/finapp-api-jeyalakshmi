let LoginService = require('../service/LoginService.js');

class LoginController{
    static async loginUser(req, res){
        let result = await LoginService.loginUser(req.body);
        if(result.length > 0){
            result[0]['message'] = "success";
            res.status(200).json({message : "Successfully LoggedIn"});
            //res.status(200).json(result[0]);
        }
        else{
            res.status(400).json({message : "Failed to Log In"});
        }
    }
}

module.exports = LoginController;