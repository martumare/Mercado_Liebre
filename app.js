const express = require("express");
const app = express();
const path = require("path");


/*app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor funcionando en el puerto 3030")
});
*/
app.listen(3030, () => {
    console.log("Servidor funcionando en el puerto 2020")
});

const publicPath = path.resolve (__dirname, "./public"); 
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});


