const routes = require("next-routes");

module.exports = routes()
  .add("write")
  .add("login")
  .add("admin", "/admin/")
  .add("admin/write", "/admin/write/:slug")
  .add("blogs", "/blogs/:slug");
