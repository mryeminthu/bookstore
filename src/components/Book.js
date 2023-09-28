import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removebook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(removebook({ id }));
    await dispatch(deleteBook({ id }));
  };

  return (
    <article className="new-books-container">
      <section className="new-book-item">
        <header className="new-section1">
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="new-book-button-section">
            <button type="button">Comments</button>
            <button onClick={handleDelete} type="button">
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </header>
        <section className="new-section2">
          <div className="new-progress-bar">
            <CircularProgressbar value="70" text="70%" />
          </div>
          <div>
            <h2>70 %</h2>
            <p>Completed</p>
          </div>
        </section>
        <section className="new-section3">
          <p>CURRENT CHAPTER</p>
          <h3>Chapter 10</h3>
          <button type="button">Update Progress</button>
        </section>
      </section>
    </article>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
