const express = require("express");
const bodyParser = require("body-parser")

const hostname = '127.0.0.1';
const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/form.html");
})
app.post("/display", function (req, res) {
    var fname = req.body.fname;
    var  lname = req.body.lname;
    var age = req.body.age;
    var  id = req.body.id;
    var  email = req.body.email;

    res.send(`<h3>First name: ${fname}<h3/>
    <h3>Last name : ${lname}<h3/>
    <h3>Age: ${age}<h3/>
    <h3>Id : ${id}<h3/>
    <h3>Email : ${email}<h3/>`
    );
});

app.listen(4000, function () {
    console.log(`server is running on http://${hostname}:${port}/`);
})