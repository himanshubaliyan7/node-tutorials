const fs = require("fs");
const { encode } = require("punycode");


// Write file code:

// fs.writeFile("message.txt", "Hello form Node.js!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!")
// })

// Read File:

fs.readFile('./message.txt','utf-8' ,(err, data) => {
    if(err) throw err;
    console.log(data);
});