let LoginDao = require('../dao/LoginDao.js');
let PhoneNumberValidator = require('../validation/PhoneNumberValidator.js');
let PasswordValidator = require('../validation/PasswordValidator.js');

class LoginService{

static loginUser(user){
    let phoneno = user.phoneno;
    let password = user.password;
    return LoginDao.loginUser(phoneno, password);
}

}

module.exports = LoginService;