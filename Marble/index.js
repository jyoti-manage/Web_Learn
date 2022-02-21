const express = require("express");
const app = express();  
const path = require("path")
const port = 80;

app.use('/static',express.static('static'))
//app.use(express.static('public'))

app.set('view engine', 'pug');

app.set("views",path.join(__dirname,'views'))

// app.locals.basedir = __dirname

app.use(express.urlencoded())


app.get('/',(req, res) =>{
  
    res.render('index.pug');
  })

  app.get('/contact',(req, res) =>{
  
    res.render('contact.pug');
  })  

  app.get('/tiles',(req, res) =>{
  
    res.render('tiles.pug');
  })  

// app.post('/',(req,res)=>{
//   name = req.body.name
//    age=req.body.age
//    address =req.body.address
//    gen=req.body.gen
//   let out=`name: ${name},age: ${age},gender:${gen},address:${address}`
//   fs.writeFileSync('output.txt',out)

//   res.render('index.pug');
// })  

  



app.listen(port,()=>{
    console.log(`the app started successfully on port ${port}`)
});