let pool = require('./connection.js');

class ApplicationDao {
    static async saveApplication(loanDetails, application) {
        let applicationQuery = 'INSERT INTO application (loan_id, loan_name, phoneno, amount) VALUES ($1, $2, $3, $4)';
        let params = [application.loan_id, application.loan_name, application.phoneno, application.amount];

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

    static async getAllUserLoanApplicationDetails(){
        let getUserQuery = `SELECT regusers.name, regusers.email, regusers.phoneno, regusers.address, regusers.city, regusers.pincode, application.loan_id, application.loan_name, application.amount FROM regusers FULL JOIN application ON regusers.phoneno = application.phoneno`;
        //let params = [regusers.name, regusers.email, regusers.phoneno, regusers.address, regusers.city, regusers.pincode, application.loan_id, application.loan_name, application.amount];
        try{
            let client = await pool.connect();
            let result = await client.query(getUserQuery);
            console.log("Hello");
            console.log(result);
            client.release();
            return result.rows;
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = ApplicationDao;