const express =require('express');
const  mongoose  = require('mongoose');
const app = express();
const {Movies} = require('../models/index')

mongoose.connect('mongodb://127.0.0.1:27017/moviesdb', {
useNewUrlParser:true,
useUnifiedTopology:true
}).then(() => { 
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

//findAllMovies() - to search the movie by status.
// app.get('/movies',(req,res)=>{
//     const status =  req.query.status;
//     console.log('Received request with status:', status);

//     if(status==='PUBLISHED'){
//         console.log('Querying for published movies...');
//         Movies.find({published:true})
//         .then(movies =>{
//             console.log(movies)
//             res.json(movies)
//         })   
//         .catch(err=>{
//             console.log(err)
//         })
//     }
//     else if(status === 'RELEASED'){
//         console.log('Querying for released movies...');
//         Movies.find({released:true})
//         .then(movies=>{
//             console.log(movies)
//             res.json(movies)
//         })
//             .catch(err=>{
//                 console.log(err)                
//                 res.status(500)    
//             })
//         }
//         else {
//             res.status(400).json({ error: "Invalid status parameter" });
//         }
//     })
    
    //findOne() - to fetch all details of a movie given its id.

    // app.get('/movies',(req,res)=>{
    //     const id = req.query.id
    //     if (!id) {
    //         return res.status(400).json({ error: 'Movie ID is required' });
    //       }
    //      Movies.findOne({movieid : id})
    //     .then(moviename=>{
    //         console.log(moviename)
    //         res.json(moviename)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // })


    //findShows() - to fetch details of shows of a specific movie given its id.

    app.get('/movies' , (req,res)=>{
        const id = req.query.id
        if(!id){
            return res.status(400).json({error : 'Movie ID is required'})
        }
        Movies.findOne({movieid : id})
        .then(moviename=>{
            if (!moviename) {
                return res.status(404).json({ error: 'Movie not found' });
              }
       
        const showavailables = moviename.shows.length > 0
        if(showavailables){
            res.json(moviename.shows)
        }
        else{
            res.json({message : 'Shows Not available'})
        } 
    })
    })
app.listen(5000)