const pool = require('../dao/connection.js');

class UserDao{
    static async newUser(user){
        let userQuery = 'INSERT INTO regusers (name, email, password, phoneno, gender, dob, address, city, pincode, state, country) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)';
        try{
            let client = await pool.connect();
            let result = await client.query(userQuery, user);
            console.log("User Added Successfully");
            return result;
        }
        catch(err){
            console.log(err);
        }
    }

    static async checkPhoneNumberExists(phoneno){
        let checkQuery = 'SELECT * FROM regusers WHERE phoneno = $1';
        let params = [phoneno];
        let client = await pool.connect();
        let result = await client.query(checkQuery, params);
        return result.rows;
    }

}

module.exports = UserDao;