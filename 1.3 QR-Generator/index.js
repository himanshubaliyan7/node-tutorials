import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'value',
      message: 'Type in your URL:',
      default: 'QR Code'
    }
  ])
  .then((answers) => {
    const url = answers.value;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`qr_img.png`));

    fs.writeFile('URL.txt', url, (err) => {
      if(err) throw err;
      console.log('URL saved!');
    });
  });



  
  