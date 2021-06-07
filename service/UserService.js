let UserDao = require('../dao/UserDao.js');
let Validator = require('../validation/Validator.js');
let EmailValidator = require('../validation/EmailValidator.js');
let PasswordValidator = require('../validation/PasswordValidator.js');
let PhoneNumberValidator = require('../validation/PhoneNumberValidator.js');


class UserService {
    static async saveUser(user) {
        let isValidName = Validator.validName(user.name);
        let isValidEmail = EmailValidator.validEmail(user.email);
        let isValidPassword = PasswordValidator.validatePassword(user.password);
        let isValidPhoneno = PhoneNumberValidator.validPhoneNumber(user.phoneno);
        let isValidGender = Validator.validGender(user.gender);
        let isValidDob = Validator.validDob(user.dob);
        let isValidAddress = Validator.validAddress(user.address);
        let isValidcity = Validator.validCity(user.city);
        let isValidPincode = Validator.validPincode(user.pincode);
        let isValidState = Validator.validState(user.state);
        let isValidCountry = Validator.validCountry(user.country);



        if (!isValidName || !isValidGender || !isValidDob || !isValidAddress || !isValidcity || !isValidPincode || !isValidState || !isValidCountry) {
            throw new Error("Please Fill All the Fileds!");
        }
        else if (!isValidEmail) {
            throw new Error("Your Email Id is Not Valid");
        }
        else if (!isValidPassword) {
            throw new Error("Password must contain atleast 8 to 20 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        }
        else if (!isValidPhoneno) {
            throw new Error("Your Mobile Number is not Valid");
        }
        else if (isValidName && isValidEmail && isValidPassword && isValidPhoneno && isValidGender && isValidDob && isValidAddress && isValidcity && isValidPincode && isValidState && isValidCountry) {
            let result = await UserDao.checkPhoneNumberExists(isValidPhoneno);
            if (result.length == 0) {
                let newUser = [user.name, user.email, user.password, user.phoneno, user.gender, user.dob, user.address, user.city, user.pincode, user.state, user.country];
                return UserDao.newUser(newUser);
            }
            else {
                throw new Error("Phone Number Already Exists");
            }
        }
    }

    static updateUser(phoneno, updateUser) {

        return UserDao.update(phoneno, updateUser);

    }

    static getUser(phoneno) {
        return UserDao.getUser(phoneno);
    }

    static deleteUser(phoneno) {
        return UserDao.delete(phoneno);
    }


}

module.exports = UserService;