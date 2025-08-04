const mongoose=require("mongoose");

// define the mongodb connection URL

// replace the mydatabse with your choice database
//const mongoURL='mongodb://localhost:27017/mydabase';


const mongoURL='mongodb://localhost:27017/hotel';


// set up the mongodb connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


// get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection

const db=mongoose.connection;

// define event listeners for database connection

db.on('connected',()=>{
    console.log("connected the MongoDB Server!!!!");
})