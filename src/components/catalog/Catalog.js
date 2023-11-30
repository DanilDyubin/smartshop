import { HiOutlineSwitchVertical, HiViewGrid, HiViewList } from 'react-icons/hi';
import Cart from '../cart/Cart';
import Filters from '../filters/Filters';
import './catalog.scss';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container catalog-container">
        <div className="catalog__subtitle">Каталог</div>
        <h1 className="catalog__title">Смартфоны</h1>
        <div className="catalog__header">
          <div className="catalog__filter">
            <HiOutlineSwitchVertical />
            <span>по популярности</span>
          </div>
          <div className="catalog__grid">
            <HiViewGrid className="catalog__grid-icon active-grid" />
            <HiViewList className="catalog__grid-icon" />
          </div>
        </div>
        <div className="catalog__content">
          <div className="catalog__filters">
            <Filters />
          </div>
          <div className="catalog__carts">
            <ul className="catalog__list list-reset">
              <li className="catalog__list-item">
                <a href="#" className="catalog__link">
                  <Cart />
                </a>
              </li>
              <li className="catalog__list-item">
                <a href="#" className="catalog__link">
                  <Cart />
                </a>
              </li>
              <li className="catalog__list-item">
                <a href="#" className="catalog__link">
                  <Cart />
                </a>
              </li>
              <li className="catalog__list-item">
                <a href="#" className="catalog__link">
                  <Cart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
