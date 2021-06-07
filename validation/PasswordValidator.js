class PasswordValidator {
    /**
     * This function validates the password with a regular expression.
     */
    static validatePassword(password) {
        let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

        //password field should not be empty.
        if (password == null || password == "") {
            //alert("Password field Can,t be Empty!.");
            return false;
        }

        //password should match the given condition.
        if (!(password.match(passwordRegex))) {
            return false;
        }
        return true;
    }
} 

module.exports = PasswordValidator;