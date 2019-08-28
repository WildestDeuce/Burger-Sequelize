let express = require("express");
let mysql = require("mysql");

let app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"))

require("./controllers/burgers_controllers")(app);
require("./controllers/burgers_controllers")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});