const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'books', required: false }],
    biography: { type: String, required: true },
    nationality: { type: String, required: true }
  },
  {
    timestamps: true,
    coleccion: 'authors'
  }
);

const Author = mongoose.model('authors', authorSchema, 'authors');
module.exports = Author;
