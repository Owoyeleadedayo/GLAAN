import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './page/HomePage/HomePage'
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Events/Banner';
import Community from "./components/Community/Community";
import ContactUs from './components/Contact/ContactUs';
import Tag from './components/Tag';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Tag />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Banner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
