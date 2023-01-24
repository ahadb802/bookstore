import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/book';
import './books.css';

const Books = ({
  id, title, author, category,
}) => {
  const send = useDispatch();
  const remove = () => {
    send(removeBook(id));
  };

  return (
    <div className="books-section">
      <div className="book-info">
        <div className="description">
          <h2>{title}</h2>
          <h4>{author}</h4>
          <h5>{category}</h5>
        </div>
        <div className="btn">
          <button type="button">
            Comments
          </button>
          <button type="button" onClick={remove}>
            Remove
          </button>
          <button type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Books;
