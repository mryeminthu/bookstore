import React from 'react';
import { useSelector } from 'react-redux';
import DisplayBook from './DisplayBook';

const DisplayBookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <ul className="book_list">
      {books.map((book) => (
        <DisplayBook
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default DisplayBookList;
