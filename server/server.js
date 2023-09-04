const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://temcenkovova8:brFMAZAjzkX4ighR@cluster0.4dgfzzn.mongodb.net/SpeakWithMe?retryWrites=true&w=majority",{
   useNewUrlParser:true,
   useCreateIndex:true,
   useFindAndModify:false,
}).then(() => console.log('DB connection successful'));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
   next();
});

const rateLimit = require('express-rate-limit') ;

const limiter = rateLimit({
   max: 100,
   windowMs:60*60*1000,    // Тут указываем время через которое лимит обновится
   message:"Too many requests, try again later" // сообщение в случае превышения лимита
});
app.use('/api',limiter)

app.use(express.json())

app.listen(port, () => {
   console.log(`App running on ${port}...`)
});

