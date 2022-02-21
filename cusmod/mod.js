console.log("This is module");
let a=10;
function average (arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

//module.exports=average;     
// console.log(mod[3,9])  (in the mod.js)    

// module.exports={         
//     avg:average,         //object
//     a:a
// }

module.exports.name="myName"



