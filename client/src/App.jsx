
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Notfound from './pages/NotFound/Notfound'
import Header from './components/Header'
import ContactUs from './pages/ContactUs/ContactUs'
import Explore from './pages/Explore/Explore'
import Login from './pages/Login/Login'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
