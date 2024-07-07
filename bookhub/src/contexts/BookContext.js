import {createContext, useEffect, useState} from "react";
import { fetchBooks } from "../services/api";

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
                setFilteredBooks(data);
                const uniqueCategories = [...new Set(data.map(book => book.category))]
                setCategories(uniqueCategories);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    },[]);
    
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        setFilteredBooks(category ? books.filter(book => book.category === category) : books);
        setCurrentPage(1);
    };
    
    const filterByTitle = (title) => {
        if(selectedCategory) setFilteredBooks(books.filter(book => book.category === selectedCategory && book.title.toLowerCase().indexOf(title.toLowerCase()) != -1))
        else setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())));
        setCurrentPage(1);

    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const resetFilters = () => {
        setFilteredBooks(books);
        setSelectedCategory('');
      };
    return (<BookContext.Provider value={{books,filteredBooks,categories,selectedCategory,resetFilters, currentPage,
        itemsPerPage,
        paginate, filterByCategory, filterByTitle,loading,error}}>
        {children}
    </BookContext.Provider>)
}