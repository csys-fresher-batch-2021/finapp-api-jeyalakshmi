const LoanDao = require('../dao/LoanDao.js');

class LoanService{
    static async getAllLoans(){
        return LoanDao.showAllLoans();
    }

    static getLoanById(id){
        return LoanDao.getLoanById(id);
    }
    
}

module.exports = LoanService;