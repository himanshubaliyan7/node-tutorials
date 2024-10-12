import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "orange", "banana", "grapes"],
        htmlContent: "<em>This is Some em Text!</em>", // Fixed HTML tags
    };
    res.render("index", data); // Removed .ejs extension
});

app.listen(port, () => {
    console.log(`Server has started on ${port}`);
});