const fs= require('fs');

const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

const express=require('express');
const server=express();


server.use(express.json());  //Body Parser //For -By using Express will understand Body Part (For Parsing Body Part)(Reads like Its an JOSON Code)
// server.use(express.urlencoded()); //(We Can Used When We Send Data From Form)

server.use(express.static('public'));  //{STATIC HOSTING} for adding Static Html File //if html file name is index.html so it will load by default automatically other wise you have to add your query in url 
// like this:- localhost8080/demo.html //creating public folder is necessary 

const auth=(req,res,next)=>{
    // console.log(req.query)
    if(req.body.password=='123'){
        res.send('I am here')
        next()
    }else{
        res.send(401)
    }
}

// server.use(auth)

server.get('/',auth,(req,res)=>{
    res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'})
})



server.use((req,res,next)=>{
    console.log(new Date());
})


server.listen(8080,()=>{
    console.log('Server Started')
})