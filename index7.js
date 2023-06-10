const http=require('http')
const fs=require('fs');
const { serialize } = require('v8');

const index=fs.readFileSync('index6.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));

const products=data.products;

const server=http.createServer((req,res)=>{


    if(req.url.startsWith('/product')){
        const id=req.url.split('/')[2];
        const product=products.find(p=>p.id===(+id))
        console.log(product);

        res.setHeader('content-type','text/html')
        let modifiedIndex=index.replace('**title**',product.title).replace('**url**',product.thumbnail)
        res.end(modifiedIndex)
    }



})

server.listen(8080)