import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Catalog from '../pages/Catalog';
import Phone from '../pages/Phone';
import Cart from '../pages/Cart';
import Footer from '../components/footer/Footer';
import NotFound from '../pages/NotFound';
// import HeaderMobile from '../components/headerMobile/HeaderMobile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/:phoneId" element={<Phone />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {/* <HeaderMobile /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
