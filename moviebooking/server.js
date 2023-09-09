const http = require('http');

const server = http.createServer((req,res)=>{
  const method = req.method;
const url =  req.url;
if(method === 'GET' && url =='/movies' ){
  res.writeHead(200,{'Content-Type': 'application/json'})
  res.end(JSON.stringify({message:'All Movies Data in JSON format from Mongo DB'}))
}
else if(method === 'GET' && url === '/genres'){
  res.writeHead(200 , {'Content-Type' : 'application/json'});
  res.end(JSON.stringify({message : 'All Genres Data in JSON format from Mongo DB'}))
}
else if(method === 'GET' && url === '/artists'){
res.writeHead(200,{'Content-Type': 'application/json'});
res.end(JSON.stringify({"message" : 'All Artists Data in JSON format from Mongo DB'}))
}
  
})

server.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});


module.exports = server;  

//
//Checkpoint 6 part1
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1000;


app.use(cors());


app.get('/',(req,res)=>{
    res.json({message: "Welcome to Movie booking app"});
});


app.listen(PORT, ()=>{
    console.log('serveris running on port');
})

//