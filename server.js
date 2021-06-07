const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express()

app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

const loanController = require('./controller/LoanController');

app.get('/', (req, res) => console.log('Welcome to ABC Financial Consultant!'));

//Loan Routes
app.get('/api/loantypes', loanController.getAllLoans);
app.get('/api/loantypes/:id', loanController.getLoanById);


app.listen(port, () => console.log(`App listening on port ${port}!`))