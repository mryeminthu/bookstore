import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbook, postBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title !== '' || formData.author !== '') {
      const bookObject = {
        title: formData.title,
        author: formData.author,
      };
      dispatch(addbook(bookObject));
      await dispatch(postBook(bookObject));
      setFormData({ title: '', author: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="new-AddBook">
      <h2>ADD NEW BOOK</h2>
      <form className="new-bookform">
        <input
          type="text"
          className="new-bookTitle"
          placeholder="Book title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          className="new-authorName"
          placeholder="Author Name"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
