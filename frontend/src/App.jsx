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
import OdobPage from './pages/University/Odob/OdobPAge';
import Nizom from './pages/University/Nizom/Nizom';
import Uhaqida from './pages/University/Uhaqida/Uhaqida';
import Fhamkor from './pages/Faoliyat/Fhamkor';
import Yoshlar from './pages/Faoliyat/Yoshlar/Yoshlar';
import Kunduzgi from './pages/Abiturient/Kunduzgi/Kunduzgi';
import Zayavka from './pages/Abiturient/Zayafka/Zayavka';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:slug/:id' element={<News />} />
          <Route path='/New' element={<NewsPage/>} />
          <Route path='/:slug/:id' element={<Markaz/>} />
          <Route path='/:slug/:id' element={<Kafedra/>} />
          <Route path='/IchqiTartib' element={<Koidaich/>} />
          <Route path='/Odob' element={<OdobPage/>} />
          <Route path='/University/Nizom' element={<Nizom/>} />
          <Route path='/University/Universitet_haqida' element={<Uhaqida/>} />
          <Route path='/Faoliyat/Hamkor' element={<Fhamkor/>} />
          <Route path='/Faoliyat/Yoshlar' element={<Yoshlar/>} />
          <Route path='/Kunduzgi-talim-yonalishlari/:id' element={<Kunduzgi/>} />
          <Route path='/Abiturient/Sirtiq' element={<Kunduzgi/>} />
          <Route path='/Abiturient/Magistr' element={<Kunduzgi/>} />
          <Route path='/Abiturient/Ikkinchi' element={<Kunduzgi/>} />
          <Route path='/Abiturient/Qochirish' element={<Kunduzgi/>} />
          <Route path='/online-hujjat-topshirish/:id' element={<Zayavka/>} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
