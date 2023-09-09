
const mongosh = require('mongoose');
const dburl = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.4/moviesdb'

const mongoconnect = () => {
    mongosh.connect('dburl', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(
            console.log('successsfully integrated with mongoDb')

        )
        .catch(err => {
            console.log('error ' + err)
        })
}

module.exports = mongoconnect;



//
//set up the mongoose object


const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/db';


mongoose.connect(mongoUrl, {
    userNewUrlParser:true,
    userUnifiedTopology:true,
});


const db = mongoose.connection;


module.export = {
    mongoose,
    db
};8:35 pm 

//