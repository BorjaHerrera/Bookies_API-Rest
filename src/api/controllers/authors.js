const Author = require('../models/authors');

const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate('books');
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get');
  }
};

const getAuthorByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const author = await Author.find({ name: name }).populate('books');
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get by Name');
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get by Id');
  }
};

const postAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);

    const authorSaved = await newAuthor.save();
    return res.status(201).json(authorSaved);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Post');
  }
};

const putAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAuthor = await Author.findById(id);
    const newAuthor = new Author(req.body);
    newAuthor._id = id;
    newAuthor.books = [...oldAuthor.books, ...req.body.books];
    const updatedAuthor = await Author.findByIdAndUpdate(id, newAuthor, {
      new: true
    });
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Put');
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return res.status(400).json(deletedAuthor);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Delete');
  }
};

module.exports = {
  getAuthors,
  getAuthorByName,
  getAuthorById,
  postAuthor,
  putAuthor,
  deleteAuthor
};
