
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BookContextProvider } from './contexts/BookContext'
import Home from './modules/Home'
import BookDetail from './components/BookDetail'
import Header from './components/Header'

function App() {

  return (
    <BookContextProvider>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book/:id' element={<BookDetail/>}/>
        </Routes>
      </Router>
    </BookContextProvider>
  )
}

export default App
