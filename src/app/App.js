import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import { createContext } from 'react';
import Catalog from '../pages/Catalog';
import Phone from '../pages/Phone';
import Cart from '../pages/Cart';
import Footer from '../components/footer/Footer';
import NotFound from '../pages/NotFound';
// import HeaderMobile from '../components/headerMobile/HeaderMobile';
import './App.css';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
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
        </SearchContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
