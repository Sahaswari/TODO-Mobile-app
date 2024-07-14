const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/todoDB').on('open',()=>{
    console.log("MongoDB Connected");
}).on('error',()=>{
    console.log("Connction error");
});

module.exports = connection;