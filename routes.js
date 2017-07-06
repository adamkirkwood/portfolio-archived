const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('frontpage', '/')

routes.add('work/sketchpacks', '/work/sketchpacks')
