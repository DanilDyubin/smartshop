import { useState, useEffect } from 'react';
import { HiViewGrid, HiViewList } from 'react-icons/hi';
import Card from '../components/card/Card';
import Sort from '../components/sort/Sort';
import Filters from '../components/filters/Filters';
import Skeleton from '../components/Skeleton/Skeleton';

import './catalog.scss';

const Catalog = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('');
  const [checkboxValue, setCheckboxValue] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?memory=' + checkboxValue).then(
      (res) =>
        res.json().then((arr) => {
          setPhones(arr);
          setLoading(false);
        }),
    );
  }, [checkboxValue]);

  const onClickCheckbox = (checkbox) => {
    setCheckboxValue(checkbox);
  };
  console.log(checkboxValue);

  return (
    <section className="catalog">
      <div className="container catalog-container">
        <div className="catalog__subtitle">Каталог</div>
        <h2 className="catalog__title">Смартфоны</h2>
        <div className="catalog__header">
          <Sort />
          <div className="catalog__grid">
            <HiViewGrid className="catalog__grid-icon active-grid" />
            <HiViewList className="catalog__grid-icon" />
          </div>
        </div>
        <div className="catalog__content">
          <div className="catalog__filters">
            <Filters checkboxValue={checkboxValue} onClickCheckbox={onClickCheckbox} />
          </div>
          <div className="catalog__carts">
            <ul className="catalog__list list-reset">
              {loading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : phones.map((items) => {
                    const { id, ...itemsProps } = items;
                    return (
                      <li key={id} className="catalog__list-item">
                        <Card {...items} />
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
// https://run.mocky.io/v3/deb40cb1-2f9a-4b74-a82d-2587965df5f5
export default Catalog;