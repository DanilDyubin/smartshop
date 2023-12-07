import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import HeaderMobile from '../components/headerMobile/HeaderMobile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
      {/* <HeaderMobile /> */}
    </div>
  );
}

export default App;
