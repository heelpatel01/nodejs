const http=require('http');
const fs=require('fs');

const data=fs.readFileSync('data.json','utf-8')

const server=http.createServer((req,res)=>{
    console.log("Server Started");
    res.setHeader('content-type','application/json');
    res.end(data)
})

server.listen(8080)