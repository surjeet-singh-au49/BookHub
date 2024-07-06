import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import Products from '../components/Products'

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/b/YEP3');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        {/* <Hero/> */}
        <h2 className='text-6xl font-bold text-center mt-20'>Books</h2>
        <Products data={data}/>
    </div>
  )
}

export default Home