import { HiOutlineSwitchVertical } from 'react-icons/hi';
import './catalog.scss';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container catalog-container">
        <div className="catalog__subtitle">Каталог</div>
        <h1 className="catalog__title">Смартфоны</h1>
        <div className="catalog__filter">
          <HiOutlineSwitchVertical />
          <span>по популярности</span>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
