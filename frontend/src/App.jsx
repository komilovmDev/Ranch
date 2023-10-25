import './App.css'
import Footer from './context/Footer/Footer'
import Navbar from './context/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import NewsPage from './pages/NewsPage/NewsPage';
import Markaz from './pages/University/Markaz/Markaz';
import Kafedra from './pages/University/Kafedra/Kafedra';
import Koidaich from './pages/University/KoidaIch/Koidaich';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/New' element={<NewsPage/>} />
          <Route path='/University/Markaz' element={<Markaz/>} />
          <Route path='/University/Kafedra' element={<Kafedra/>} />
          <Route path='/University/IchqiTartib' element={<Koidaich/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
