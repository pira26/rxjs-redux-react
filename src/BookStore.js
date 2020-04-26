import React from 'react';
import { useSelector } from 'react-redux';

import './BookStore.css';

import { Search, ListBook, Checkout, Header } from './components';
import { useBookStore } from './hooks';

const BookStore = () => {
  const {
    checkout,
    basket,
    basketCounter,
    setCheckout,
    removeBook,
    addBook
  } = useBookStore();
  
  const {loading} = useSelector(state => state.genre);
  
  return (
      <div className="container">
        <Header basket={basket}
                checkout={checkout}
                setCheckout={setCheckout}
                basketCounter={basketCounter}
                removeBook={removeBook}
        />
        {
          loading ? <div className="loader"/>
              : checkout ? <Checkout removeBook={removeBook} basket={basket} setCheckout={setCheckout}/>
              : <>
                <Search/>
                <ListBook addBook={addBook}/>
              </>
        }
      
      </div>
  );
};

export default BookStore;
