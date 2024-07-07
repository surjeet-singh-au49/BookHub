function BookItem({book, onClick}) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={onClick}>
       <a className="block relative h-48 rounded overflow-hidden">
         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={book.thumbnail} />
       </a>
       <div className="mt-4">
         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book.category}</h3>
         <h2 className="text-gray-900 title-font text-lg font-medium">{book.title}</h2>
       </div>
    </div>
  )
}

export default BookItem