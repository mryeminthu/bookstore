import React from 'react';
import DisplayBook from './DisplayBook';

const DisplayBookList = () => {
  const books = [
    {
      Id: 101,
      Title: 'Harry Potter',
      Author: 'JK.Rowling',
    },
  ];
  return (
    <>
      <div className="book_cont">
        <ul>
          {books.map((book) => (
            <DisplayBook
              Title={book.Title}
              Author={book.Author}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
