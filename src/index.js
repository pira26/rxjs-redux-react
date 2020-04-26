import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configStore';
import BookStore from './BookStore';

const store = ConfigureStore();

ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <BookStore/>
      </Provider>
    </StrictMode>
    , document.getElementById('root')
);

