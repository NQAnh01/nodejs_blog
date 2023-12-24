// import { router } from "./newsRouter.js";
const newsRouter = require("./newsRouter");
const siteRouter = require("./siteRouter");
function route(app) {
  app.use("/news", newsRouter);
  //   app.use("/search", siteRouter);
  app.use("/", siteRouter);
}

module.exports = route;
