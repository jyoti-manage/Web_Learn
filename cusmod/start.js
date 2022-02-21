const http=require('http')
const fs=require('fs')

const index=fs.readFileSync('index.html')
const home=fs.readFileSync('home.html')

let server=http.createServer((req,res)=>{
    let url=req.url
    console.log(url)
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    if(url=='/')
          res.end(index)
    else if(url=='/home.html') //SAME URL AS IN HREF IN HTML A TAG AND SHOWN IN THE SEARCH TAB IN GOOGLE
          res.end(home)      

})

server.listen(80,'127.0.0.1',()=>{
    console.log('listening at 80')
})

