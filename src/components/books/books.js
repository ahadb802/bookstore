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
    <div className="book-info">
      <div className="content">
        <div className="description">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="btn">
            <button type="button" className="button">
              Comments
            </button>
            <div className="vertical-divider" />
            <button type="button" className="button" onClick={remove}>
              Remove
            </button>
            <div className="vertical-divider" />
            <button type="button" className="button">
              Edit
            </button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container"><div className="circular-progress" /></div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 17</p>
            </div>
            <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
          </div>
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
