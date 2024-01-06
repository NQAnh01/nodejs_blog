const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const engine = require('express-handlebars');
const path = require('path');
// const SortMiddleware = require('./app/middlewares/SortMiddleware.js');
const route = require('./routes/index.js');
const db = require('./config/db');

// connect db
db.connect();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(morgan('combined'));

app.engine(
  'hbs',
  engine.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
app.use(methodOverride('_method'));

// app.use(SortMiddleware);

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
