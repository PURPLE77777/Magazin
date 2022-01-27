const express = require("express");
const mysql = require("mysql2");

const port = 3000;

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "Magazin",
});
// в dependencies в .gitignore /node_modules
function getUsers() {
    conn.query("SELECT * FROM users", (err, res) => {
        if (err) return console.log(err);
        return res;
    });
}

const app = express();

app.get("/", (request, response) => {
    response.send("<h2>Привет Express!</h2>");
});

app.use(express.json());

app.post("/auth", (request, response) => {
    console.log(request.query);
    response.send(`Got data:\n${JSON.stringify(request.query)}`);
    response.redirect("/home");
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
