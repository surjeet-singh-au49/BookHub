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

  const handleClick = (id) => {
    navigateTo(`/book/${id}`);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if(loading) return <div>Loading....</div>
  if(error) return <div>Error: {error.message || ''}</div>
  return (
    <div>
        {/* <Hero/> */}
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
        <div className="pagination">
        {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  )
}

export default BookList