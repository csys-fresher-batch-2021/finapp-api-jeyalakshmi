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

    static async getLoanById(id){
        let loanQuery = 'SELECT * FROM loantypes WHERE loan_id = $1';
        let params = [id];
        try{
            let client = await pool.connect();
            let result = await client.query(loanQuery, params);
            return result.rows;
        }
        catch(err){
            console.log(err);
        }
    }


}

module.exports = LoanDao;