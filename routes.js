const routes = require('next-routes')

module.exports = routes().add('write').add('blogs', '/blogs/:slug')
