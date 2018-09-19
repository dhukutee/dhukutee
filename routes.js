const routes = require("next-routes");

module.exports = routes()
  .add("write")
  .add("login")
  .add("blogs", "/blogs/:slug");
