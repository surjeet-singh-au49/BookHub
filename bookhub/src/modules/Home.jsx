import BookList from "../components/BookList"
import CategoryFilter from "../components/CategoryFilter"
import Filter from "../components/Filter"
import Hero from "../components/Hero"

const Home = () => {
  return (
  <> 
  {/* <Hero/> */}
  <div className="">
      <div className="flex items-center justify-evenly w-full mt-4">
        <Filter />
        <CategoryFilter />
      </div>
      <BookList />
  </div>
  </>
)
}

export default Home