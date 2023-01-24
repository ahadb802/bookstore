import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoriesReducer from './categories/categories';

const Store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default Store;
