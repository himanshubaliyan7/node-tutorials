import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World! from Himanshu Baliyan.');
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/himanshu", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/himanshu", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/himanshu", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
})