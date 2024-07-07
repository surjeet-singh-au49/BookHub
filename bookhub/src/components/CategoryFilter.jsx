import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const CategoryFilter = () => {
  const { categories, filterByCategory, selectedCategory } = useContext(BookContext);

  return (

    <Menu as="div" className="relative inline-block ml-4">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedCategory ? selectedCategory : 'All'}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
       {selectedCategory && <MenuItem key="">
            <a
              href="#"
              className= " block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => filterByCategory("")}
            >
              All
            </a>
            </MenuItem>}
          {
          categories.map(category => (
            <MenuItem key={category}>
            <a
              href="#"
              className= " block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={() => filterByCategory(category)}
            >
              {category}
            </a>
            </MenuItem>
          ))
          }
          
        </div>
      </MenuItems>
    </Menu>
    
    // <div className="category-filter">
    //   {categories.map(category => (
    //     <button
    //       key={category}
    //       className={selectedCategory === category ? 'selected' : ''}
    //       onClick={() => filterByCategory(category)}
    //     >
    //       {category}
    //     </button>
    //   ))}
    // </div>
  );
};

export default CategoryFilter;