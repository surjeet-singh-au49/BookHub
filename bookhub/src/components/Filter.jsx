import { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Filter = () => {
  const { filterByTitle } = useContext(BookContext);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    filterByTitle(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default Filter;
