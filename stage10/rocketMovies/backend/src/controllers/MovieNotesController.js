const knex = require('../database/knex');
const AppError = require('../utils/AppError');

const mediumTime = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short",
});

class MovieNotesController {
  async create(req, res) {
    const { title, description, rating, tag_name } = req.body
    const user_id = req.user.id

    //Não esquecer de travar o limite da nota entre 1 e 5
    if (rating <= 0 || rating >= 6) {
      throw new AppError('Digite um numero entre 1 e 5.')
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    await knex("movie_tags").insert({
      note_id,
      user_id,
      tag_name
    })

    res.json()
  }

  async show(req, res) {
    const { id } = req.params
    const user_id = req.user.id

    const movie_notes = await knex("movie_notes").where({ id }).first()
    const movie_tags = await knex("movie_tags").where({ note_id: id })
    const users = await knex("users").where({ id: user_id }).first()

    return res.json({
      user: users,
      movie: movie_notes,
      tags: movie_tags
    })
  }

  async delete(req, res) {
    const { id } = req.params

    await knex("movie_notes").where({ id }).delete()

    return res.json()
  }

  async index(req, res) {
    const { title, tag_name } = req.query
    const user_id = req.user.id

    let notes;

    if (tag_name) {
      const filterTags = tag_name.split(',').map(tag => tag.trim())

      notes = await knex("movie_tags")
        .select([
          "movie_notes.id",
          "movie_notes.title",
          "movie_notes.user_id",
        ])//nome da tabela e nome do campo da tabela referente
        .where("movie_notes.user_id", user_id) //filter ser baseado no id do user
        .whereLike("movie_notes.title", `%${title}%`)
        .whereIn("tag_name", filterTags) //Analisar baseado na tag
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id") //conectando tabelas através do innerJoin
        .orderBy("movie_notes.title") //ordernar por ordem alfabetica do titulo

    } else {
      notes = await knex("movie_notes")
        .where({ user_id }) //onde o user_id
        .whereLike("title", `%${title}%`) //Busca por valores que contenham dentro de uma palavra
        .orderBy("title",) //orndernar por ordem alfabetica
    }

    const userTags = await knex("movie_tags").where({ user_id })
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...note,
        tag_name: noteTags
      }
    })

    return res.json(notesWithTags)
  }

}

module.exports = MovieNotesController;