const mongoose = require('mongoose')

mongoose.set('debug' , true)

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true },()=>{
    console.log("Connected to MongoDB Database")
})

module.exports.User = require('./user');
module.exports.Poll = require('./poll')
