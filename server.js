const express = require("express");
const bodyParser = require('body-parser')

const { ProductControllers } = require("./controllers/productcontroller");
//const { websiteApp } = require("./Routes/Website");

const App = express();
App.use(bodyParser.json())

let productController = new ProductControllers();

App.get("/product", productController.list);
App.post("/product", productController.create);
App.put("/product/:id", productController.update);
App.get("/product/:id", productController.viewOne);
App.delete("/product/:id", productController.delete);

const Port = 8076;
App.listen(Port, function () {
    console.log("app start and listen to port " + Port)
})