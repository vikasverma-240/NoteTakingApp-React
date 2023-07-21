const mongoose = require('mongoose');
const connectionString = "mongodb://127.0.0.1:27017/testdb";

const connectToMongo = () => {
    mongoose.connect(connectionString)
        .then(() => {
            console.log('Successfully connected to MongoDB');
            // Perform additional operations after successful connection
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            // Handle the error appropriately
        });
}


module.exports = connectToMongo;