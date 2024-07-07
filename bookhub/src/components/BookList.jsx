import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import CategoryFilter from "./CategoryFilter";
import Loading from "./Loading";
import Error from "./Error";
import NoData from "./NoData";
const BookList = () => {
  const { filteredBooks, loading, error ,currentPage, itemsPerPage, paginate } = useContext(BookContext);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  const navigateTo = useNavigate();
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

  if (loading) return <div><Loading/></div>;
  if (error) return <div><Error/></div>;
  return (
    <div>
      <h2 className="text-6xl font-bold text-center my-16">Books</h2>
      <div className="flex items-center justify-end w-full pr-10">
      <span className=" font-bold text-xl"> Categories :</span>
        <CategoryFilter />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {currentItems && currentItems.length ? currentItems.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                onClick={() => handleClick(book.id)}
              />
            )) : <NoData/>}
          </div>
        </div>
      </section>
      <div className="pagination flex justify-center mb-16">
        {currentPage > 1 && (
          <button
            onClick={handlePrevious}
            className="bg-indigo-500 border rounded border-indigo-500 text-black py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-indigo-400"
          >
            Prev
          </button>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <button
            key={startPage + i}
            onClick={() => paginate(startPage + i)}
            className={`bg-gray-200 border border-gray-300 text-gray-800 rounded py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300 ${
              currentPage === startPage + i
                ? "bg-indigo-500 text-white border-blue-500"
                : ""
            }`}
          >
            {startPage + i}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            className="bg-indigo-500 rounded border border-indigo-500 text-black py-2 px-4 mx-1 cursor-pointer transition-colors duration-300 hover:bg-indigo-400"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BookList;
