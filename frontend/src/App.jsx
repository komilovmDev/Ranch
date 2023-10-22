import './App.css'
import Footer from './context/Footer/Footer'
import Navbar from './context/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
