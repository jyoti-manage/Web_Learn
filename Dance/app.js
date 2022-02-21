const express = require("express");
const fs = require("fs");
const app = express();  
const path = require("path")
const bodyparser=require("body-parser")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance',{ useUnifiedTopology: true,useNewUrlParser: true }).catch(err => console.log(err));;

const port = 8000;
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String

})

const contact = mongoose.model('Contact', contactSchema);

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug');
app.set("views",path.join(__dirname,'views'))

app.get('/',(req, res) =>{
   
    const params ={ }
    res.status(200).render('home.pug',params);
  })

  app.get('/contact',(req, res) =>{
   
    const params ={ }
    res.status(200).render('contact.pug',params);
  }) 

  // npm install body-parser  (to post request with express and save in mongodb)
  
  app.post('/contact',(req, res) =>{
   
  console.log(req.body)  
    var myData = new contact(req.body);
    myData.save().then(()=>{
          res.send("This item has been save to database");
    }).catch(()=>{
      res.status(400).send("Item was not saved to the database")
    });
    //res.status(200).render('home.pug');
  })  ;


  
app.listen(port,()=>{
    console.log(`the app started successfully on port ${port}`)
});
