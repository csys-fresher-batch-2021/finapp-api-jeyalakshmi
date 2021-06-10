let ApplicationDao = require('../dao/ApplicationDao.js');
let LoanService = require('./LoanService.js');
let PhoneNumberValidator = require('../validation/PhoneNumberValidator.js');

class ApplicationService {
    static async saveApplication(id, application) {
        let loanDetails = await LoanService.getLoanById(id);

        let isValidPhoneno = PhoneNumberValidator.validPhoneNumber(application.phoneno);

        if (!isValidPhoneno) {
            throw new Error("Invalid Phone Number");
        }

        if (loanDetails != null) {
            return ApplicationDao.saveApplication(loanDetails, application);
        }
        else {
            console.log("Loan Type Not Available");
        }
    }

    static getApplications() {
        return ApplicationDao.getApplications();
    }

    static async getApplicationByLoanId(loan_id){
        return ApplicationDao.getApplicationByLoanId(loan_id);
    }

    static updateApplication(phoneno, application){
        return ApplicationDao.updateApplication(phoneno, application);
    }

    static getAllUsersLoanApplicationDetails(){
        return ApplicationDao.getAllUserLoanApplicationDetails();
    }

    static getApplicationByPhoneNumber(phoneno){
        return ApplicationDao.getApplicationByPhoneNumber(phoneno);
    }

    static removeApplication(phoneno){
        return ApplicationDao.removeApplication(phoneno);
    }

}

module.exports = ApplicationService;