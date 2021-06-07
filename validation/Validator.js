class Validator{

    static  validName(name){
        if (name == null || name == "") {
        return false;
      }
      return true;
      }

      static  validGender(gender){
        if (gender == null || gender == "") {
          return false;
      }
      return true;
      }

      static  validDob(dob){
        if (dob == null || dob == "") {
          return false;
      }
      return true;
      }

      static  validAddress(address){
        if (address == null || address == "") {
          return false;
      }
      return true;
      }

      static  validCity(city){
        if (city == null || city == "") {
          return false;
      }
      return true;
      }

      static  validPincode(pincode){
        if (pincode == null || pincode == "") {
          return false;
      }

      if (pincode.length < 6 && pincode.length > 6) {
        return false;
    }

      return true;
      }

      static  validState(state){
        if (state == null || state == "") {
          return false;
      }
      return true;
      }

      static  validCountry(country){
        if (country == null || country == "") {
          return false;
      }
      return true;
      }

}

module.exports = Validator;