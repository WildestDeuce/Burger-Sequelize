let express = require("express");
let mysql = require("mysql");
let exphbs = require("express-handlebars");
let app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./controllers/burgers_controllers")(app);

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});