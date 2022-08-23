import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
