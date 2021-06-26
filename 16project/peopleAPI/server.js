var express = require('express');
var bodyparser = require('body-parser')

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var productAPI = require("./controllers/product.controller")
app.use("/api/products", productAPI);

app.listen(8080);
console.log("server up and running on 8080");