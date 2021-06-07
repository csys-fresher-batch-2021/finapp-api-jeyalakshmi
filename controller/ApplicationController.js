let ApplicationService = require('../service/ApplicationService.js');

class ApplicationController{
    static async saveApplication(req, res){
        let loan_id = req.params.loan_id;
        try{
            let result = await ApplicationService.saveApplication(loan_id, req.body);
            if(result != null){
                res.status(200).json({message : "Application Submitted Successfully"});
            }
        }
        catch(err){
            res.status(400).json({message : err.message});
        }
    }

}

module.exports = ApplicationController;