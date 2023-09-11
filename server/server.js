const express = require('express')
const app = express()
const port = 3001;
const mongoose = require('mongoose');


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
   next();
});
mongoose.connect("mongodb+srv://temcenkovova8:brFMAZAjzkX4ighR@cluster0.4dgfzzn.mongodb.net/SpeakWithMe?retryWrites=true&w=majority",{
   useNewUrlParser:true,
   useCreateIndex:true,
   useFindAndModify:false,
}).then(() => console.log('DB connection successful'));


const rateLimit = require('express-rate-limit') ;

const limiter = rateLimit({
   max: 400,
   windowMs:60*60*1000,
   message:"Too many requests, try again later"
});
app.use('/',limiter)

app.use(express.json())

const userRouter = require('./Routers/newUsersRouter')
const postRouter = require('./Routers/postRouter')
const subRouter = require('./Routers/subscribedFriendsRouter')
const dialogsRouter = require('./Routers/dialogsRouter')

app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/subFriends',subRouter)
app.use('/dialogs',dialogsRouter)




app.listen(port, () => {
   console.log(`App running on ${port}...`)
});

