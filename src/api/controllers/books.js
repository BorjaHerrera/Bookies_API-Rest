const Book = require('../models/books');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().populate('authors');
    return res.status(200).json(books);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get');
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate('authors');
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get by Id');
  }
};

const getBookByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const book = await Book.find({ category: category }).populate('authors');
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get by Category');
  }
};

const getBookByPrice = async (req, res, next) => {
  try {
    const { price } = req.params;
    const book = await Book.find({ price: { $lte: price } }).populate(
      'authors'
    );
  } catch (error) {
    return res.status(400).json('Error en la solicitud Get by Price');
  }
};

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    console.log(req.body);

    const bookSaved = await newBook.save();
    return res.status(201).json(bookSaved);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Post');
  }
};

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBook = new Book(req.body);
    newBook._id = id;
    const updatedBook = await Book.findByIdAndUpdate(id, newBook, {
      new: true
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Put');
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    return res.status(400).json(deletedBook);
  } catch (error) {
    return res.status(400).json('Error en la solicitud Delete');
  }
};

module.exports = {
  getBooks,
  getBookById,
  getBookByCategory,
  getBookByPrice,
  postBook,
  putBook,
  deleteBook
};
