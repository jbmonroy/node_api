const mongoose = require('mongoose');

const dbConnect = ()=>{
    const DB_URI = process.env.DB_URI; 
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifinedTopology: true
        }
    ).then(()=>{
        console.log('*** DB CONNECTION SUCCESS ***');
    }).catch((e)=>{
        console.log('___ DB CONNECTION FAILED ___');
    });
};

module.exports = dbConnect;