const { Router } = require("express")

const MovieTagsController = require('../controllers/MovieTagsController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const movieTagsRoutes = Router()

const movieTagsController = new MovieTagsController()

movieTagsRoutes.get('/', ensureAuthenticated, movieTagsController.index)
// movieTagsRoutes.post('/:user_id', movieTagsController.create)
// movieTagsRoutes.get('/:id', movieTagsController.show)
// movieTagsRoutes.delete('/:id', movieTagsController.delete)

module.exports = movieTagsRoutes;