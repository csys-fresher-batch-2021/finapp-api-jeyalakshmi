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

    static async getApplicationByLoanId(req, res){
        let loan_id = req.params.loan_id;
        let result = await ApplicationService.getApplicationByLoanId(loan_id);
        res.json(result);
    }

    static async updateApplication(req, res){
        let phoneno = req.params.phoneno;
        let result = await ApplicationService.updateApplication(phoneno, req.body);
        if(result != null){
            res.status(200).json({message : "Successfully Updates"});
        }
        else{
            res.status(400).json({message : "Failed to Update"});
        }
    }

    static async getAllUsersLoanApplicationDetails(req, res){
        let result = await ApplicationService.getAllUsersLoanApplicationDetails();
        res.status(200).json(result);
    }

    static async getApplicationByPhoneNumber(req, res){
        let phoneno = req.params.phoneno;
        let result = await ApplicationService.getApplicationByPhoneNumber(phoneno);
        if(result != 0){
            res.status(200).json(result);
        }
        else{
            res.status(400).json({message : "Failed to Get Data Check the Phone Number"});
        }
    }

    static async removeApplication(req, res){
        let phoneno = req.params.phoneno;
        let result = await ApplicationService.removeApplication(phoneno);
        if(result.rowCount > 0){
            res.status(200).json({message : "Application Removed Successfully"});
        }
        else{
            res.status(400).json({message : "Failed to Remove Application"});
        }
    }

}

module.exports = ApplicationController;