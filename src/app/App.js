import Catalog from '../components/catalog/Catalog';
import Header from '../components/header/Header';
import HeaderMobile from '../components/headerMobile/HeaderMobile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      {/* <HeaderMobile /> */}
    </div>
  );
}

export default App;
