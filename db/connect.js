const mongoose = require('mongoose')

const connectDB = (connectionString) => {
    return mongoose.connect(connectionString);
}

module.exports = connectDB;