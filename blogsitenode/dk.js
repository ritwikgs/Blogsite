// const ep = require('./mod');

// console.log(ep.a);
// console.log(ep.p);
// console.log(ep.cc);
// console.log(ep);


// console.log('greetings');
// const fs = require('fs');
// fs.readFile('./text.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
//  console.log('good morning');


// const fs = require('fs');
// fs.writeFile('./texhjvhvt.txt', 'i too love programming!', () => {
//     console.log('file written');
// })
// fs.writeFile('./text.txt', 'hello', () => {
//     console.log('file written');
// })
// console.log("hi");


// const fs = require('fs');
// fs.mkdir('./demo', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');

// });
// fs.writeFile('./demo/pro.txt', 'yum yum yum', () => {
//     console.log('yum yum written inside pro file which resides in assests folder');
// })
// console.log('written00');
// console.log('evening');



// const fs = require('fs');
// if(fs.existsSync('./assests/pro.txt')){
//     fs.unlink('./assests/pro.txt', (err) => {
//         console.log(err);
//     })
//     console.log('file deleted');
    
// }


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'html');
    let path = './assests/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';        
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })  
    // res.write('<h1>hello!<h1>');
    // res.end();
});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port number 3000');
});