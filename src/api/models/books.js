const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'authors',
        require: true
      }
    ],
    image: { type: String, required: true },
    pages: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: [String],
      required: true,
      enum: [
        'Ciencia Ficción',
        'Misterio',
        'Romántico',
        'Fantasía',
        'Terror',
        'Biografía',
        'Aventura',
        'Música',
        'Postapocalíptica',
        'Psicología',
        'Humor',
        'Realismo Mágico',
        'Clásicos'
      ]
    }
  },
  {
    timestamps: true,
    coleccion: 'books'
  }
);

const Book = mongoose.model('books', bookSchema, 'books');
module.exports = Book;
