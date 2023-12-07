import { useState, useEffect } from 'react';
import { HiOutlineSwitchVertical, HiViewGrid, HiViewList } from 'react-icons/hi';
import Card from '../card/Card';
import Filters from '../filters/Filters';
import Skeleton from '../Skeleton/Skeleton';

import './catalog.scss';

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState('Сначала популярные');
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = ['Сначала популярные', 'Сначала дешевые', 'Сначала дорогие', 'По названию'];

  useEffect(() => {
    fetch('https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones').then((res) =>
      res.json().then((arr) => {
        setPhones(arr);
        setLoading(false);
      }),
    );
  }, []);

  const onFiltersSelect = (name) => {
    setSelect(name);
    setOpen(false);
  };

  return (
    <section className="catalog">
      <div className="container catalog-container">
        <div className="catalog__subtitle">Каталог</div>
        <h2 className="catalog__title">Смартфоны</h2>
        <div className="catalog__header">
          <div className="catalog__filter" onClick={() => setOpen(!open)}>
            <HiOutlineSwitchVertical />
            <span>{select}</span>
          </div>
          {open && (
            <div className="catalog__filter-popup">
              <ul className="catalog__filter-popup--list">
                {filters.map((name, i) => (
                  <li
                    key={i}
                    onClick={() => onFiltersSelect(name)}
                    className={
                      select === name
                        ? 'catalog__filter-popup--item' + ' active'
                        : 'catalog__filter-popup--item'
                    }>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
              {loading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : phones.map((items) => {
                    const { id, ...itemsProps } = items;
                    return (
                      <li key={id} className="catalog__list-item">
                        <Card {...itemsProps} />
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
