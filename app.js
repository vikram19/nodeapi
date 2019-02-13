const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');

const database = 'mongodb://localhost:27017/mydb';

const app = express();
app.use(cors({credentials: true, origin: true})); 

// Connect To Database
mongoose.connect(database,{ useNewUrlParser: true });

// On connection
mongoose.connection.on('connected', ()=>{
    console.log('connected to database '+ database);
});

const users = require('./routes/users');

app.use('/users',users);

// On error
mongoose.connection.on('error', (err)=>{
    console.log('database error :  '+err);
});

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));


app.listen(8080,function () {
    console.log("Server is listning on port" + 8080);
});