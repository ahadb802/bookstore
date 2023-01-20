import React from 'react';
import './add.css';

const Add = () => (
  <div className="add-section">
    <h2>Add New Book</h2>
    <form action="">
      <input
        type="text"
        placeholder="Enter Title of your Book"
        required
      />
      <input
        className="author-input"
        type="text"
        placeholder="Enter Author of your Book"
        required
      />
      <button type="submit" className="btn-submit">Add Book</button>
    </form>
  </div>
);
export default Add;
