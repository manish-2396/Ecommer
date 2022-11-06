const express = require('express')

var cors = require('cors');
const { connection } = require('./Config/db');
const { userRoutes } = require('./Router/userRouter');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors())

app.use(express.json())

app.use("/" , userRoutes)


app.listen(PORT , async() => {

    try{
        await connection;
        console.log('Connect to DB PORT No:-' , PORT )
    }
    catch(err){
        console.log('not connected to DB' , err)
    }
})