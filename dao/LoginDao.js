let pool = require('./connection.js');


class LoginDao{
static async loginUser(phoneno, password){
    const loginQuery = "SELECT * FROM regusers WHERE phoneno = $1 AND password = $2";
    let params = [phoneno, password];
    let client = await pool.connect();
    let result = await client.query(loginQuery, params);
    return result.rows;
    }
}

module.exports = LoginDao;