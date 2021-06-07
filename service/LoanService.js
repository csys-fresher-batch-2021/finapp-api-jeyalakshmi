const LoanDao = require('../dao/LoanDao.js');

class LoanService{
    static async getAllLoans(){
        return LoanDao.showAllLoans();
    }

}

module.exports = LoanService;