const htttp=require('http')
const fs=require('fs')

const filecontent = fs.readFileSync('grid.html')

const server=htttp.createServer((req,res)=>{

    res.writeHead(200, {'Content-type':'text/html'});
    res.end(filecontent)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening port 8000')
})