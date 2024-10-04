import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'value',
      message: 'Enter QR Value: ',
      default: 'QR Code'
    }
  ])
  .then((answers) => {
    const url = answers.value;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`qr_img.png`));
  });



  
  