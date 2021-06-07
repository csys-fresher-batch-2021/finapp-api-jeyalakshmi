
class PhoneNumberValidator{


    static  validPhoneNumber(phoneno){
      if (phoneno == null || phoneno == "") {
        return false;
    }

   // const result = validatePhoneNumber.validate(phoneno);

    let regex = new RegExp(/^[6789]\d{9}$/);
    if (!(phoneno.match(regex))) {
        return false;
    }
    return true;
    }

}

module.exports = PhoneNumberValidator;


