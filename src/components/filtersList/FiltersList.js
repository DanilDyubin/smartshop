import { useState } from 'react';
import Checkbox from '../UI/checkbox/Checkbox';

import './filtersList.scss';

const FiltersList = ({ filters, handleChange }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ul className={show ? 'filters__list list-reset' : 'filters__list list-reset hide'}>
        {filters.map((item, i) => (
          <li key={i} className="filters__list-item">
            <Checkbox id={i} label={item} handleChange={handleChange} />
          </li>
        ))}
      </ul>
      <p className="filters__list-show" onClick={() => setShow(!show)}>
        {show ? 'Скрыть' : 'Еще'}
      </p>
    </>
  );
};

export default FiltersList;
