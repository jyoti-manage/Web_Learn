const fs=require("fs");
let text=fs.readFileSync("file","utf-8");

let newtext=text.replace("file","Rohan");

fs.writeFileSync("file",newtext)  //"file" doesnot exist then its created  
// Asyncrnous function non-blocking , call-backs (arrow function) will fire, after functions task ends