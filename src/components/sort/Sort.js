import { useState } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import './sort.scss';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState('Сначала популярные');

  const filters = ['Сначала популярные', 'Сначала дешевые', 'Сначала дорогие', 'По названию'];

  const onFiltersSelect = (name) => {
    setSelect(name);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__wrapper" onClick={() => setOpen(!open)}>
        <HiOutlineSwitchVertical />
        <span>{select}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul className="sort__popup-list">
            {filters.map((name, i) => (
              <li
                key={i}
                onClick={() => onFiltersSelect(name)}
                className={select === name ? 'sort__popup-item' + ' active' : 'sort__popup-item'}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
