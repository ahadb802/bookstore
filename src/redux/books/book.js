import data from '../../components/api/Data';

const ADD_A_BOOK = 'bookStore/books/ADD_A_BOOK';
const REMOVE_A_BOOK = 'bookStore/books/REMOVE_A_BOOK';
const LIST_BOOKS = 'bookStore/books/LIST_BOOKS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  if (action.type === ADD_A_BOOK) {
    return [...state, action.book];
  }
  if (action.type === REMOVE_A_BOOK) {
    return state.filter((book) => book.id !== action.book);
  }
  if (action.type === LIST_BOOKS) {
    return action.list;
  }
  return state;
};

export const addBook = (book) => async (dispatch) => {
  data.add(book);
  dispatch({
    type: ADD_A_BOOK,
    book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  data.remove(book);
  dispatch({
    type: REMOVE_A_BOOK,
    book,
  });
};

export const listBooks = () => async (dispatch) => {
  const list = await data.allBooks();
  dispatch({
    type: LIST_BOOKS,
    list,
  });
};

export default booksReducer;
