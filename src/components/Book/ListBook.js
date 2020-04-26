import React from 'react';

import { useSelector } from 'react-redux';
import { Starts } from '../Stars/Stars';

export const ListBook = props => {
  const {addBook} = props;
  const {books, loading, error} = useSelector(state => state.book);
  
  return (
      <div className="books-list">
        {
          error
              ? error
              : loading
              ? <div className="loader"/>
              : books && books.map(book => {
                return (
                    <div key={book.code} className="book-list-item">
                      <img  alt={book.name} src={`images/books/${book.code}.png`}/>
                      <div className="book-summary">
                        <span>{book.author}</span>
                        <span>${book.price}</span>
                        <Starts stars={book.stars}/>
                        <button className="buy-button"
                                onClick={() => addBook(book)}
                        >
                          <span className="fa fa-shopping-cart"/>
                          buy
                        </button>
                      </div>
                    </div>)
              })
        }
      </div>
  );
};

