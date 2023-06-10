const http=require('http');
const fs=require('fs');

const index=fs.readFileSync('index6.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))

const product=data.products[0];

const server=http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case "/":
            res.setHeader('content-type','text/html');
            res.end(index);
            break;
    
        case "/api":
            res.setHeader('content-type','application/json');
            res.end(JSON.stringify(data));
            break;

        case "/product":
            res.setHeader('content-type','text/html');
            let modifiedIndex=index.replace('**title**',product.title).replace('**url**',product.thumbnail).replace('**rating**',product.rating).replace('**price**',product.price);
            res.end(modifiedIndex);            
            break;

        default:
            // res.writeHead(404);//We can use only this also it will generate error...
            res.setHeader('content-type','text/html');
            res.end(fs.readFileSync('erroPage.html','utf-8'))
            }
            
})

server.listen(8010)