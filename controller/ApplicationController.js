let ApplicationService = require('../service/ApplicationService.js');

class ApplicationController {
    static async saveApplication(req, res) {
        let loan_id = req.params.loan_id;
        try {
            let result = await ApplicationService.saveApplication(loan_id, req.body);
            if (result != null) {
                res.status(200).json({ message: "Application Submitted Successfully" });
            }
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async getApplications(req, res) {
        let result = await ApplicationService.getApplications();
        res.json(result);
    }

    static async getAllUsersLoanApplicationDetails(req, res){
        //let phoneno = req.params.phoneno;
        let result = await ApplicationService.getAllUsersLoanApplicationDetails();
        //if(result != null){
        res.status(200).json(result);
        //}
        //else{
        //    res.status(400).json({message : "Failed to Get Data"});
       // }
    }

}

module.exports = ApplicationController;