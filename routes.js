const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "index")
  .add("admin", "/admin", "admin/index")
  .add("login", "/admin/login", "admin/login")
  .add("write", "/admin/write", "admin/write")
  .add("edit", "/admin/write/:slug", "admin/write")
  .add("index", "/blogs")
  .add("blogs", "/:slug*");
