var http = require('http');
var fs=require('fs');
http.createServer((req,res)=>
{
    fs.writeFile('content.txt','okayokay',(err,data)=>
    {
        res.write(data);
        res.end();
    })
}).listen(8080)

















/*var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.appendFile('content.txt','Thankyou!',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)*/
















/*var http = require('http');
var fs = require('fs');
 
http.createServer((req,res)=>{
    fs.readFile('content.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)
*/













/*var http = require('http');
const { fstat } = require('fs');
http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
    console.log('server started..')
}).listen(8000)*/






















/*
var http = require('http');
http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
    console.log('server running...')
}).listen(8080)*/