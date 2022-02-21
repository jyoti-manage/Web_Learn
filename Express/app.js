const express = require("express"); //EXPRESS--custom backend(routing)(if-else),functions
//Templete Engine(PUG) with Express
// info. is feed in any of the form and give a templete(html) (put variables as where they need to)as output 

// static files-- open to all publically
const app = express();

// for serving static files 
app.use('/static',express.static('static'))
//       url folder               folder 

app.use(express.urlencoded()) // get data in the url form the form filled

const fs = require("fs");
const path = require("path") // join string
const port = 80;

app.get('/',(req,res)=>{
  res.status(200).send("this is the first line")
 // res.send("this is the first line")
})

// app.post('/',(req,res)=>{

//   res.status(400).send("This is about page")
// })

//set the template pug element
app.set('view engine', 'pug');


//set the view directory
app.set("views",path.join(__dirname,'views'))  //'view folder


// app.use(express.urlencoded())

// it show the form dta,parameters on url
app.get('/demo',(req, res) =>{
   
    //res.status(200).render('demo',{title:'Hey',message: 'Sup!!'})
    res.render('index.pug');

    //  const params={'title':'PUBG','content':'kill'}
    //  res.status(200).render('start.pug',params)
  })

// app.post('/',(req,res)=>{
//    const params={'title':'filled','content':"submitted"}
//      res.status(200).render('start.pug',params)

// })

app.post('/',(req,res)=>{
  name = req.body.name
   age=req.body.age
   address =req.body.address
   gen=req.body.gen
  let out=`name: ${name},age: ${age},gender:${gen},address:${address}`
  fs.writeFileSync('output.txt',out)

  res.render('index.pug');
})  

  



app.listen(port,()=>{
    console.log(`the app started successfully on port ${port}`)
});