const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');

require("dotenv").config();

const port = process.env.PORT;

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());


const loanController = require('./controller/LoanController');
const UserController = require('./controller/UserController.js');

app.get('/', (req, res) => console.log('Welcome to ABC Financial Consultant!'));

//Loan Routes
app.get('/api/loantypes', loanController.getAllLoans);
app.get('/api/loantypes/:id', loanController.getLoanById);

//User Routes
app.post('/api/regusers', UserController.saveUser);
app.put('/api/regusers/:phoneno', UserController.updateUser);



app.listen(port, () => console.log(`App listening on port ${port}!`))