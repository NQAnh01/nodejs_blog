const express = require("express");
const morgan = require("morgan");

const engine = require("express-handlebars");
const path = require("path");
const route = require("./routes/index.js");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(morgan("combined"));

app.engine(
  "hbs",
  engine.engine({
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
app.set("views", "./src/resource/views");

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
