
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test',{useNewUrlparse: true,useUnifiedTopology: true});
// }


mongoose.connect('mongodb://localhost/harryKart',{useNewUrlparse: true,useUnifiedTopology: true});

var db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));     // On Error
db.once('open',function (){                                          // After successfully connected

    console.log("connected");
});

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);   // kitty schema is changed into 'kitten' model

  const fluffy = new Kitten({ name: 'fluffy' });  // objects which are the documents
  const cherry = new Kitten({ name: 'cherry' });
  const tachsey = new Kitten({ name: 'tachsey' });

//   console.log(fluffy.name);
//   fluffy.speak(); 

  async function man() {
    // await fluffy.save();
    // await cherry.save();
    // await tachsey.save();

    fluffy.save(function (err,fluffy){    // to save in the database
                // to save it makes a table/collection named as plural of 1st argument of model() function ie. Kittens
      if(err) return console.error(err)

      fluffy.speak()
    })
  }
  man();
               // filter object
               // find document having name = fluffy 
  Kitten.find({name:"fluffy"},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens);
  })
 


  

  // async function call()  {
  //   try {
  //     const kittens = await Kitten.find({name: "fluffy"},function(err,kittens){
  //       if(err)return console.error(err);
  //     console.log(kittens);})
  //   } catch(e) {
  //     console.log('Error caught');
  //   }
  // };

  // call().catch(console.error);


  



