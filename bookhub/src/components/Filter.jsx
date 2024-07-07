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

<div className="max-w-lg w-full">
            <div className="relative flex items-center w-full h-12 border-2 border-blue-500 rounded-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    className="h-full w-full pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
                    type="text"
                    id="search"
                    placeholder="Search book by title..."
                    onChange={handleTitleChange}
                />
            </div>
        </div>
  );
};

export default Filter;
