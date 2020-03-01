import axios from "axios";

export default {
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
