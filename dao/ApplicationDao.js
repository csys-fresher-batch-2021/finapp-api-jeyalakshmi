let pool = require('./connection.js');

class ApplicationDao {
    static async saveApplication(loanDetails, application) {
        let applicationQuery = 'INSERT INTO application (loan_id, loan_name, phoneno, amount, gram, acre, months) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        let params = [application.loan_id, application.loan_name, application.phoneno, application.amount, application.gram, application.acre, application.months];

        try {
            let client = await pool.connect();
            let result = await client.query(applicationQuery, params);
            console.log("Application Submitted Successfully");
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getApplications() {
        let getQuery = 'SELECT * FROM application';
        try {
            let client = await pool.connect();
            let result = await client.query(getQuery);
            return result.rows;
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getApplicationByLoanId(loan_id){
        let getLoanIdQuery = 'SELECT * FROM application WHERE loan_id = $1';
        let params = [loan_id];
        try{
            let client = await pool.connect();
            let result = await client.query(getLoanIdQuery, params);
            return result.rows;
        }
        catch(err){
            console.log(err);
        }
    }

    static async updateApplication(phoneno, application){
        let updateQuery = 'UPDATE application SET loan_id = $1, loan_name = $2, amount = $3, gram = $4, acre = $5, amount = $6 WHERE phoneno = $7';
        let params = [application.loan_id, application.loan_name, application.amount, application.gram, application.acre, application.months, phoneno];
        try{
            let client = await pool.connect();
            let result = await client.query(updateQuery, params);
            console.log("Application Updated Succesfully");
            return result;
        }
        catch(err){
            console.log(err);
        }
    }

    static async getAllUserLoanApplicationDetails(){
        let getUserQuery = `SELECT regusers.name, regusers.email, regusers.phoneno, regusers.address, regusers.city, regusers.pincode, application.loan_id, application.loan_name, application.amount, application.gram, application.acre, application.months FROM regusers FULL JOIN application ON regusers.phoneno = application.phoneno`;
        try{
            let client = await pool.connect();
            let result = await client.query(getUserQuery);
            client.release();
            return result.rows;
        }
        catch(err){
            console.log(err);
        }
    }

    static async getApplicationByPhoneNumber(phoneno){
        let getQuery = 'SELECT * FROM application WHERE phoneno = $1';
        let params = [phoneno];
        try{
            let client = await pool.connect();
            let result = await client.query(getQuery, params);
            return result.rows;
        }
        catch(err){
            console.log(err);
        }
    }

    static async removeApplication(phoneno){
        let removeQuery = 'DELETE FROM application WHERE phoneno = $1';
        let params = [phoneno];
        try{
            let client = await pool.connect();
            let result = client.query(removeQuery, params);
            return result;
            console.log("Application Removed Successfully");
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = ApplicationDao;