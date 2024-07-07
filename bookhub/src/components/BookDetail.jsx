import  { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext';

function BookDetail() {
    const {id} = useParams();
    const {books, loading} = useContext(BookContext)
    const book = books.find(book => book.id == id)
    if(loading) return <div>Fetching Book Data, Please wait...</div>
    if(!book) return <div>Book Not Found, Please try something else.</div>

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flexWrap">
                <img alt="ecommerce" className="w-1/2 h-fit  object-cover object-center rounded" src={book.thumbnail || 'https://dummyimage.com/400x400'}/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
                    <p className="leading-relaxed text-gray-900 text-xl title-font font-serif mb-1">by {book.author}</p>

                    <div className="flex mb-4">
                    <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    
                    </div>
                    <h2 className="text-base title-font text-gray-700 trackingWidest capitalize mb-3">Genre : {book.category}</h2>

                    <span className="title-font font-semibold text-base text-gray-700">Description: </span><br/>
                    <div className="flex">
                    <span className="title-font font-serif text-base text-gray-600 mt-2">{book.description}</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetail