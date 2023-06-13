const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

const express=require('express');




const server=express();
//----------Authentication MiddleWare-------

const auth=(req,res,next)=>{
    console.log(req.query);
    if(req.query.password=='1234567890'){
        next();
    }else{
        res.sendStatus(401);
    }
}

// server.use(auth);

//------------------------------------------
//---------------Middle Ware-----------------

server.use((req,res,next)=>{
    console.log(req.method,new Date(),req.hostname,req.ip,req.get('user-agent'));
    next();
})

// ------------------------------------------

//API -> End Point OR Route

server.get('/',(req,res)=>{
    res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{              //here we added authentication middleware on post method...we can add it on any method
    res.json({type:'POST'})
})
// server.put('/',(req,res)=>{
//     res.json({type:'PUUT'})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:'DELET'})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})
// })

// server.get('/',(req,res)=>{
    // res.sendStatus(200)
    // res.json(products);
    // res.status(201).send('<h1>Jay Shree Ram</h1>');
    // res.sendFile('C:\Users\Heel Patel\OneDrive\Desktop\Node JS ch.3\index.html')  //it needs Absolute path
// })

server.listen(8080,()=>{
    console.log('Server Started')
});