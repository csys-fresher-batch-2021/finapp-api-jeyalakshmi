const LoanService = require('../service/LoanService');

class LoanController{
    static async getAllLoans(req, res){
        let result = await LoanService.getAllLoans();
        res.json(result);
    }

}

module.exports = LoanController;