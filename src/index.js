import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
app.set("views", "./src/resource/views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
