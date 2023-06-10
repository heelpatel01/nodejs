const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader("dummy","dummyValue")
    res.setHeader("content-type",'text/html')
    res.end("Jay Shree Ram")
})

server.listen(8080)