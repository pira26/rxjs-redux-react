import React from 'react';

export const Header = props => {
  const {basket, basketCounter, checkout, setCheckout, removeBook} = props;
  return (
      <div className="title">
        <img className="title-book-svg" alt="books" src="images/book.svg"/>
        <h3>Search, Find and Buy your book here!</h3>
        {
          !checkout &&
          <span className="fa-layers fa-fw basket dropdown">
                            <i className="fas fa-shopping-basket"></i>
                            <span className="fa-layers-counter basket-counter">{basketCounter}</span>
            {
              basket.length > 0 &&
              (
                  <div className="dropdown-content">
                    {basket.map((book, index) => {
                      return (
                          <div className="basket-item" key={index}>
                            <span className="basket-book">{book.name}</span>
                            <span className="basket-qty">{book.qty}</span>
                            <a href="#" onClick={() => removeBook(book)}>
                              <i className="fas fa-trash-alt basket-icon"/>
                            </a>
                          </div>
                      )
                    })}
                    <button className="pay-now" onClick={() => setCheckout(true)}>
                      <i className="fas fa-credit-card pay-now-icon"/>
                      Pay now
                    </button>
                  </div>
              )
            }
          </span>
        }
      </div>
  
  );
};