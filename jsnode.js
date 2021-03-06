const http = require('http');   //module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animation</title>
  
      <style>
          .gola{
              width: 100px;
              height: 100px;
              background-color: yellow;
              transition: width 2s ,height 4s, border-radius 4s, background 4s;
          }
          .gola:hover{
              width: 300px;
              height: 300px;
              
              background: red;
              border-radius: 50%;
          }
          a{
              animation: bouncing 0.5s ease 0s infinite alternate both;
              background: darkblue;
              border-radius: 50%;
              display: inline-block;
              color: white;
              cursor: pointer;
              font-size: 0.75rem;
              font-weight: 300;
              letter-spacing: 0.2em;
              padding: 1em 2em 1.1em;
              position: relative;
              text-decoration: none;
              text-transform: uppercase;
              vertical-align: top;
              margin-top: 100px;
  
          }
  
          @keyframes bouncing{
              0%{
                  bottom: 0;
                  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
              }
  
              50%{
                  bottom: 50px;
                  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1) ;
              }
  
              100%{
                  bottom: 100px;
                  box-shadow: 0 50px 50px  seagreen;
              }
          }
      </style>
  </head>
  <body>
      <div class="gola"></div>
      <a href="">Loading</a>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});