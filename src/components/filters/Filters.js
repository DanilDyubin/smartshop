import FiltersList from '../filtersList/FiltersList';

import './filters.scss';

const memory = ['512 ГБ', '256 ГБ', '128 ГБ', '64 ГБ', '32 ГБ'];
const ram = ['12 ГБ', '8 ГБ', '6 ГБ', '4 ГБ'];
const brand = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];
const camera = ['64 МП', '50 МП', '48 МП', '12 МП'];

const Filters = () => {
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
        <FiltersList filters={memory} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Оперативная память</div>
        <FiltersList filters={ram} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Бренд</div>
        <FiltersList filters={brand} />
      </div>
      <div className="filters__block">
        <div className="filters__caption">Основная камера</div>
        <FiltersList filters={camera} />
      </div>
    </section>
  );
};

export default Filters;
