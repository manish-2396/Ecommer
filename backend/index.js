const express = require('express')

var cors = require('cors');
const { connection } = require('./Config/db');
const { userRoutes } = require('./Router/userRouter');
const { cartRouter } = require('./Router/cartRouter');
const { authtication } = require('./middleware/authtication');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors())

app.use(express.json())

app.use("/" , userRoutes)

app.use(authtication)

app.use("/" , cartRouter)


app.listen(PORT , async() => {

    try{
        await connection;
        console.log('Connect to DB and PORT No:-' , PORT )
    }
    catch(err){
        console.log('not connected to DB' , err)
    }
})