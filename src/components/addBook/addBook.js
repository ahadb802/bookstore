import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/book';
import './add.css';

const Add = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const send = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    send(addBook(bookData));
    setTitle('');
    setAuthor('');
    setCategory('Select');
  };
  return (
    <div className="add-section">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form action="" onSubmit={formSubmit} className="add-form">
        <input
          className="input title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title of your Book"
          required
        />
        <input
          className="input title-input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author of your Book"
          required
        />
        <select onChange={(e) => setCategory(e.target.value)} className="input category-input">
          <option value="Select">Select</option>
          <option value="java">java</option>
          <option value="C/C++">C/C++</option>
          <option value="WildWorld">WildWorld</option>
        </select>
        <button type="submit" className="primary-button-big">Add Book</button>
      </form>
    </div>
  );
};
export default Add;
