const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "index")
  .add("admin", "/admin", "admin/index")
  .add("login", "/admin/login", "admin/login")
  .add("write", "/admin/write", "admin/write")
  .add("index", "/blogs")
  .add("blogs", "/:slug*");
