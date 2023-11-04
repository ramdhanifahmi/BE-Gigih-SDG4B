require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
var cors = require('cors')


const port = process.env.PORT || 8080;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
  console.log(error);
})

database.once('connected',()=>{
  console.log('Database Connected');
})

app.use(cors({
  origin: '*',
  // allowHeaders: ['Content-Type', 'Authorization']
}));
app.get("/",(req,res)=>{
  res.send('hi');
})

app.listen(port,"0.0.0.0",()=>{
  console.log (`server started at port ${port}`);
})

