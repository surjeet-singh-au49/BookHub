import BookList from "../components/BookList"
import CategoryFilter from "../components/CategoryFilter"
import Filter from "../components/Filter"
import Hero from "../components/Hero"

const Home = () => {
  return (
  <> 
  <Hero/>
  <div className="flex items-center justify-evenly w-full">
  <Filter />
  <CategoryFilter />
  </div>
  
  <BookList />
  </>
)
}

export default Home