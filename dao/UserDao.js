const pool = require('../dao/connection.js');

class UserDao {
    static async newUser(user) {
        let userQuery = 'INSERT INTO regusers (name, email, password, phoneno, gender, dob, address, city, pincode, state, country) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)';
        try {
            let client = await pool.connect();
            let result = await client.query(userQuery, user);
            console.log("User Added Successfully");
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }

    static async checkPhoneNumberExists(phoneno) {
        let checkQuery = 'SELECT * FROM regusers WHERE phoneno = $1';
        let params = [phoneno];
        let client = await pool.connect();
        let result = await client.query(checkQuery, params);
        return result.rows;
    }

    static async update(phoneno, updateUser) {
        let updateQuery = 'UPDATE regusers SET name = $1,email = $2, password = $3, gender = $4, dob = $5, address = $6, city = $7, pincode = $8, state = $9, country = $10 WHERE phoneno = $11';
        let params = [updateUser.name, updateUser.email, updateUser.password, updateUser.gender, updateUser.dob, updateUser.address, updateUser.city, updateUser.pincode, updateUser.state, updateUser.country, phoneno];
        try {
            let client = await pool.connect();
            let result = client.query(updateQuery, params);
            console.log("User Updated Successfully");
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getUser(phoneno) {
        let getUserQuery = 'SELECT * FROM regusers WHERE phoneno = $1';
        let params = [phoneno];
        try {
            let client = await pool.connect();
            let result = await client.query(getUserQuery, params);
            return result.rows;
        }
        catch (err) {
            console.log(err);
        }
    }

}

module.exports = UserDao;