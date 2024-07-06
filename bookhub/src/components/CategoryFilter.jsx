import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const CategoryFilter = () => {
  const { categories, filterByCategory, selectedCategory } = useContext(BookContext);

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => filterByCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;