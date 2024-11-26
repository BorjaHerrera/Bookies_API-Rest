const removeDuplicatesFromBooks = (books) => {
  books = books || [];
  return [...new Set(books.map(String))];
};

module.exports = { removeDuplicatesFromBooks };
