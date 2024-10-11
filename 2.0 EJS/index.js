import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  const d = new Date();
  var dayType = "a Weekday";
  var advice = "work hard!";
  if (d.getDay() === 0 || d.getDay() === 6){
      dayType = "the Weekend";
      advice = "have fun!";
  }
    
  res.render("index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
