import { User } from "./Models/User";
var mysql = require("mysql");
var app = require("express")();
var http = require("http").Server(app);

app.get("/", (req, res) =>
    res.send(__dirname));

http.listen(3000, () => 
    console.log('Listening on port 3000'));