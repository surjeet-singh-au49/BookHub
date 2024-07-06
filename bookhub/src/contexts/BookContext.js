import {createContext, useEffect, useState} from "react";
import { fetchBooks } from "../services/api";

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    console.log("🚀 ~ BookContextProvider ~ categories:", categories)
    const [selectedCategory, setSelectedCategory] = useState('');

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
      };
    
    const filterByTitle = (title) => {
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())));
    };


    return (<BookContext.Provider value={{books,filteredBooks,categories,selectedCategory, filterByCategory, filterByTitle,loading,error}}>
        {children}
    </BookContext.Provider>)
}