const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


const uri = `mongodb+srv://anpythomas:${process.env.myPassword}@cluster0.3arexof.mongodb.net/?retryWrites=true&w=majority`

async function connect() {
    console.log(`Hello, ${process.env.myName}`)
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(8000, () => {
    console.log('Server started on port 8000');
})

