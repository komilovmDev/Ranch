import './App.css'
import Footer from './context/Footer/Footer'
import Navbar from './context/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import NewsPage from './pages/NewsPage/NewsPage';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/New' element={<NewsPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
