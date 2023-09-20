import { createRequire } from "module";
const require=createRequire(import.meta.url)

// 1、引入模块
var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/html;charset=UTF-8"
    })
    res.write('<h1 style="text-align:center">Hello NodeJS</h1>')

    res.end()
}).listen(3000)
