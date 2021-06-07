class EmailValidator{

    static  validEmail(email){
      var emailIdRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email == null || email == "") {
        return false;
    }

    if (!(email.match(emailIdRegex))) {
        return false;
    }
    return true;
    }

}

module.exports = EmailValidator;