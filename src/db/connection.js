const mongoose = require("mongoose");
require('dotenv').config();

//connect to db
const connection = async () => {  
    try{
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology: true} );
        //console.log("Succesfully connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

connection();