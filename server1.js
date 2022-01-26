var http=require('http');
http.createServer((req,res)=>{
    res.write('hola');
    res.end();
    console.log("seerver starrted..")
}).listen(3000)