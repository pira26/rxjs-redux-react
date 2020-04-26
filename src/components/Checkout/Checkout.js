import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Starts } from '../Stars/Stars';

export const Checkout = props => {
  const {basket, setCheckout, removeBook} = props;
  const [total, setTotal] = useState(0);
  const {genres} = useSelector(state => state.genre);
  
  useEffect(() => {
    let value = 0.0;
    if (basket && basket.length > 0) {
      basket.forEach(b => {
        value += (parseFloat(b.price) * b.qty);
      });
      if (value) {
        setTotal(Math.round(value * 100) / 100);
      }
    } else {
      setTotal(value);
      setCheckout(false);
    }
  },[basket.length]);
  
  const getGenreName = genre => {
    return genres.find(g => g.code === genre).genre;
  }
  
  return (
      <div className="checkout-book-list">
        <h3>Checkout!</h3>
        {basket.map((book,index) => {
          return (
              <div key={index} className="checkout-book-item">
                <img className="checkout-book-img" alt={book.name} src={`images/books/${book.code}.png`}/>
                <div className="checkout-book-details">
                  <span className="checkout-book-name">{book.name}</span>
                  <span className="checkout-book-author">{book.author}</span>
                  <span className="checkout-book-genre">{getGenreName(book.genre)}</span>
                </div>
                <Starts stars={book.stars}/>
                <span className="checkout-book-qty">{book.qty}</span>
                <span className="checkout-book-price">${book.price}</span>
                <a onClick={() => removeBook(book)}>
                  <i className="fas fa-trash-alt basket-icon"/>
                </a>
              </div>
          )
        })}
        <div className="checkout-book-item">
          <button className="checkout-button" onClick={() => setCheckout(false)}>
            <span className="fa fa-shopping-cart"/>buy more
          </button>
          <button className="checkout-button" onClick={() => alert('Congrats!!🤓👏')}>
            <span className="fa fa-credit-card"/>Pay Now
          </button>
          <span className="checkout-total">${total}</span>
        </div>
      </div>
  );
};