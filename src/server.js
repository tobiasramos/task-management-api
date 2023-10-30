const express = require("express");
const routes = require("./routes");

const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./database");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log("Servidor rodando");
});
