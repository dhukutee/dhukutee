const routes = require('next-routes')

module.exports = routes().add('write').add('blog', '/blog/:slug')
