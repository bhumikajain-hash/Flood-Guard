const mongoose = require('mongoose');

const connectdB=async()=>{
try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }

}

module.exports=connectdB;