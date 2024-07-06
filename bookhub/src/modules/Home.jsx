import Hero from '../components/Hero'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Hero/>
        <h2 className='text-6xl font-bold text-center mt-20'>Products</h2>
        <Products/>
    </div>
  )
}

export default Home