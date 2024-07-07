
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BookContextProvider } from './contexts/BookContext'
import Home from './modules/Home'
import BookDetail from './components/BookDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BookContextProvider>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id' element={<BookDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </BookContextProvider>
  )
}

export default App
