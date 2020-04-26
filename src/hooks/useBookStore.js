import { useState } from 'react';

export const useBookStore = initial => {
  const [basket, setBasket] = useState([]);
  const [basketCounter, setBasketCounter] = useState(0);
  const [checkout, setCheckout] = useState(false);
  
  const addBook = book => {
    const bookFound = basket.find(b => b.code === book.code);
    bookFound
        ? bookFound.qty += 1
        : setBasket(prev => prev.concat({...book, qty: 1}));
    setBasketCounter(prev => prev + 1);
  };
  
  const removeBook = book => {
    if (book.qty === 1) {
      setBasket(prev => prev.filter(b => b.code !== book.code));
    }
    book.qty -= 1;
    setBasketCounter(prev => prev - 1);
  };
  
  return {
    basket,
    basketCounter,
    checkout,
    setCheckout,
    addBook,
    removeBook
  }
};