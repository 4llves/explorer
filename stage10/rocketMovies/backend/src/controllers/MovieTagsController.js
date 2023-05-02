const knex = require('../database/knex');

class MovieTagsController {
  async index(req, res) {
    const user_id = req.user.id;

    const movieTags = await knex("movie_tags")
      .where({ user_id }) //onde o user_id for igual à      

    return res.json(movieTags);
  }
}

module.exports = MovieTagsController;