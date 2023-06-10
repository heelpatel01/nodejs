const http= require('http')
const server=http.createServer((req,res)=>{
    console.log("Ram Ram Ji")
    res.setHeader("Dummy","DummyValue")
    res.setHeader('Content-Type','txt/html')
    res.end("Jay Jay Shree Ram")
})

server.listen(8080)