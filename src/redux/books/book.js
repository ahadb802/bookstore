const ADD_A_BOOK = 'bookStore/books/ADD_A_BOOK';
const REMOVE_A_BOOK = 'bookStore/books/REMOVE_A_BOOK';
const LIST_BOOKS = 'bookStore/books/LIST_BOOKS';

const initialState = [{
  id: '1', title: 'bealy', author: 'father', category: 'java',
}];

const booksReducer = (state = initialState, action) => {
  if (action.type === ADD_A_BOOK) {
    return [...state, action.book];
  }
  if (action.type === REMOVE_A_BOOK) {
    return state.filter((book) => book.id !== action.book);
  }
  if (action.type === LIST_BOOKS) {
    return state;
  }
  return state;
};

export const addBook = (book) => async (dispatch) => {
  dispatch({
    type: ADD_A_BOOK,
    book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  dispatch({
    type: REMOVE_A_BOOK,
    book,
  });
};

export const listBooks = () => async (dispatch) => {
  dispatch({
    type: LIST_BOOKS,
  });
};

export default booksReducer;
