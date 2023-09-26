import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const [book, setBook] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleAddBook = () => {
    if (book.title.trim() === '' || book.author.trim() === '') {
      return;
    }

    const newBook = {
      item_id: 'unique_id',
      title: book.title,
      author: book.author,
      category: 'Fiction',
    };

    dispatch(addBook(newBook));

    setBook({ title: '', author: '' });
  };

  return (
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Add Title"
          value={book.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Add Author"
          value={book.author}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBookForm;
