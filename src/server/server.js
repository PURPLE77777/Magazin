const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const port = 3000;

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "12345",
//     database: "Magazin",
// });

// function getUsers() {
//     conn.query("SELECT * FROM users", (err, res) => {
//         if (err) return console.log(err);
//         return res;
//     });
// }

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/", (request, response) => {
//     response.sendFile(__dirname + "/index.html");
// });

app.get("/", (request, response) => {
    response.send("<h1>Hello Express!</h1>");
});

app.post("/auth", (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.get("/collections", (request, response) => {
    console.log(request.query);
    response.send(`Got data:\n${JSON.stringify(request.query)}`);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
