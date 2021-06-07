let ApplicationDao = require('../dao/ApplicationDao.js');
let LoanService = require('./LoanService.js');
let PhoneNumberValidator = require('../validation/PhoneNumberValidator.js');

class ApplicationService{
    static async saveApplication(id, application){
        let loanDetails = await LoanService.getLoanById(id);

        let isValidPhoneno = PhoneNumberValidator.validPhoneNumber(application.phoneno);

        if(!isValidPhoneno){
            throw new Error ("Invalid Phone Number");
        }

        if(loanDetails != null){
            return ApplicationDao.saveApplication(loanDetails, application);
        }
        else{
            console.log("Loan Type Not Available");
        }
    }

}

module.exports = ApplicationService;