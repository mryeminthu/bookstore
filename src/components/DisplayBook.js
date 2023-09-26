import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const DisplayBook = ({ itemId, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <li className="book_item">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </li>
  );
};

DisplayBook.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DisplayBook;
