const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//environment variable
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
console.log(`Environment: ${process.env.NODE_ENV}`);


//const booksRoute = require('./routes/books');


const app = express();


//settings
app.set('port', process.env.PORT);


//middlewares 
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.json());


//server
app.listen(app.get('port'), () => {
    console.log("Server is listening on port ", app.get('port'));
});