const LoanService = require('../service/LoanService');

class LoanController{
    static async getAllLoans(req, res){
        let result = await LoanService.getAllLoans();
        res.json(result);
    }

    static async getLoanById(req, res){
        let id = req.params.id;
        let result = await LoanService.getLoanById(id);
        res.send(result);
    }

}

module.exports = LoanController;