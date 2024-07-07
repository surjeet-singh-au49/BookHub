import {useContext,useState} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookItem from './BookItem';
import { useNavigate  } from 'react-router-dom'
const BookList = () => {
  const {filteredBooks,loading,error} = useContext(BookContext)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  const navigateTo = useNavigate ();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const maxVisiblePages = 5; // Adjust this number based on how many pages you want to show

  // Calculate the range of page buttons to render
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  // Adjust startPage again if the range is truncated
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  const handleClick = (id) => {
    navigateTo(`/book/${id}`);
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  if(loading) return <div>Loading....</div>
  if(error) return <div>Error: {error.message || ''}</div>
  return (
    <div>
        <h2 className='text-6xl font-bold text-center mt-20'>Books</h2>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                {currentItems.map((book) => (
                    <BookItem key={book.id} book={book} onClick={()=> handleClick(book.id)}/>
                ))}
                </div>
            </div>
        </section>
        <div className="pagination flex justify-center mt-8">
      {currentPage > 1 && (
        <button
          onClick={handlePrevious}
          className="bg-gray-200 border border-gray-300 text-gray-800 py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300"
        >
          Previous
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          onClick={() => paginate(startPage + i)}
          className={`bg-gray-200 border border-gray-300 text-gray-800 py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300 ${
            currentPage === startPage + i ? 'bg-blue-500 text-white border-blue-500' : ''
          }`}
        >
          {startPage + i}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={handleNext}
          className="bg-gray-200 border border-gray-300 text-gray-800 py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300"
        >
          Next
        </button>
      )}
    </div>
    </div>
  )
}

export default BookList