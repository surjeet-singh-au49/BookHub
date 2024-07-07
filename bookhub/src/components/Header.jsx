import { Link } from "react-router-dom"
import Filter from "./Filter"
import { useContext } from "react";
import { BookContext } from '../contexts/BookContext';


const Header = () => {
  const { resetFilters } = useContext(BookContext);

  return (
    <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl" onClick={resetFilters}>
      <Link to="/">
        BookHub
      </Link>
        </span>
    </a>
    <Filter />
  </div>
</header>
  )
}

export default Header