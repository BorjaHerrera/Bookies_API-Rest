const {
  getBooks,
  getBookById,
  getBookByCategory,
  getBookByPrice,
  postBook,
  putBook,
  deleteBook
} = require('../controllers/books');

const booksRouter = require('express').Router();

booksRouter.get('/precio/:price', getBookByPrice);
booksRouter.get('/categoria/:category', getBookByCategory);
booksRouter.get('/:id', getBookById);
booksRouter.get('/', getBooks);
booksRouter.post('/', postBook);
booksRouter.put('/:id', putBook);
booksRouter.delete('/:id', deleteBook);

module.exports = booksRouter;
