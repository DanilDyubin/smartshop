import { useState, useEffect } from 'react';
import FiltersList from '../filtersList/FiltersList';

import './filters.scss';

const memory = ['512 ГБ', '256 ГБ', '128 ГБ', '64 ГБ', '32 ГБ'];
const ram = ['12 ГБ', '8 ГБ', '6 ГБ', '4 ГБ'];
const brand = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];
const camera = ['64 МП', '50 МП', '48 МП', '12 МП'];

const Filters = ({ checkboxValue, onClickCheckbox }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    onClickCheckbox(value);
  }, [value]);

  const handleChange = (event) => {
    const { value, checked } = event.target; // получаем инпут на который кликнули и состояние checked (on)
    if (checked) {
      setValue((prev) => [...prev, value]); // в массив к предыдущему value добавляем новое
    } else {
      setValue((prev) => {
        return [...prev.filter((filters) => filters !== value)];
      });
    }
  };
  console.log(value);

  return (
    <section className="filters">
      <div className="filters__price">
        <div className="filters__caption">Цена, ₽</div>
        <div className="filters__price-inputs">
          <input type="text" className="filters__price-input" placeholder="от 12000р" />
          <input type="text" className="filters__price-input" placeholder="до 164000р" />
        </div>
        <div className="filters__price-element"></div>
      </div>
      <div className="filters__block">
        <div className="filters__caption">Встроенная память</div>
        <FiltersList filters={memory} handleChange={handleChange} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Оперативная память</div>
        <FiltersList filters={ram} handleChange={handleChange} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Бренд</div>
        <FiltersList filters={brand} handleChange={handleChange} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Основная камера</div>
        <FiltersList filters={camera} handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Filters;
