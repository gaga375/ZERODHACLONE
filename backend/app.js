const express = require('express');
require('dotenv').config();
const json = require('json');
const app = express();
const authRoute = require('./Routs/AuthRoute');
const cors = require("cors");
const port = process.env.port || 8080;
  const mongoose = require('mongoose');
const url = process.env.MONGO_url;
  const bodyParser = require('body-parser');
 let positions = require(  './models/positionModel');
 let holdings = require('./models/HoldingsSchema');
 let orders = require('./models/orderModels');
 let OrderShowModel = require("./models/orderModel1");
const cookieParser = require('cookie-parser')
 app.use(express.json());


   mongoose.connect(url)

const allowedOrigins = [
  'http://localhost:3000',
  'https://zerodhaclone-dashboard-9z8a.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.get( '/position',async(req, res)=>{
  let data = await positions.find({});
  res.json(data)
})

app.get( '/orders',async(req, res)=>{
  let data = await orders.find({});
  res.json(data)
})


app.get( '/holding',async(req, res)=>{
  let data = await holdings.find({});
  res.json(data)
})

app.post("/newOrder",async (req,res)=>{
  let {name , price , qty , mode} = req.body;
 let data = new OrderShowModel ({
  name:name,
  price:price,
  qty:qty,
  mode:mode
 });
 data.save()
  res.send('THANKS')
})
app.get('/newOrder', async (req,res)=>{
   let data = await OrderShowModel.find({});
  res.json(data)
})

// autohn..


// app.post('/signup', async (req,res)=>{
//  let {username, email,password} = req.body;
//  console.log(username,email,password)
// })

app.use(cookieParser());
app.use("/", authRoute);

    // comm..
    app.use(bodyParser.json());
    app.listen(port,()=>{
    console.log('server start')
    console.log('database connected sucess')
})

    
