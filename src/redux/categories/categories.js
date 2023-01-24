const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkStatus = () => async (dispatch) => {
  dispatch({
    type: CHECK_STATUS,
  });
};

export default categoriesReducer;
