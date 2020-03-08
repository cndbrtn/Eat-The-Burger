const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");

// set up port for local and deployed host
const PORT = process.env.PORT || 8080;

const app = express();

// static directory
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
app.use(routes);

// listening on PORT
app.listen(PORT, () => {
    console.log("server listening:", PORT);
});

