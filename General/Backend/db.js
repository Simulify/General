const { config } = require('dotenv');
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config({ path: './config/config.env' }).parsed.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;