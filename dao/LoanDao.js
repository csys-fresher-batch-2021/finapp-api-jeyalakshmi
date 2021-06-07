const pool = require('../dao/connection.js');

class LoanDao{
     
    static async showAllLoans(){
        let queryLoan = 'SELECT * FROM loantypes';
        try{
            const client = await pool.connect();
            const result = await client.query(queryLoan);
            console.log(result);
            return result.rows;
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = LoanDao;