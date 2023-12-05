import { useState } from 'react';
import Checkbox from '../UI/checkbox/Checkbox';

import './filters.scss';

const Filters = () => {
  const [show, setShow] = useState(false);
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
        <ul className={show ? 'filters__list list-reset' : 'filters__list list-reset hide'}>
          <li className="filters__list-item">
            <Checkbox id="1" label="512 ГБ" />
          </li>
          <li className="filters__list-item">
            <Checkbox id="2" label="256 ГБ" />
          </li>
          <li className="filters__list-item">
            <Checkbox id="3" label="128 ГБ" />
          </li>
          <li className="filters__list-item">
            <Checkbox id="3" label="128 ГБ" />
          </li>
          <li className="filters__list-item">
            <Checkbox id="3" label="128 ГБ" />
          </li>
          <li className="filters__list-item">
            <Checkbox id="3" label="128 ГБ" />
          </li>
        </ul>
        <p className="filters__show" onClick={() => setShow(!show)}>
          {show ? 'Скрыть' : 'Еще'}
        </p>
      </div>
    </section>
  );
};

export default Filters;
