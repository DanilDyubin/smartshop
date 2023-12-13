import { useState } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import './sort.scss';

const Sort = ({ sort, onClickSort }) => {
  const [open, setOpen] = useState(false);
  //   const [select, setSelect] = useState('Сначала популярные');

  //   const filters = ['Сначала популярные', 'Сначала дешевые', 'Сначала дорогие', 'По названию'];
  const filters = [
    { name: 'Сначала популярные', sortProperty: 'id&order=asc' },
    { name: 'Сначала дешевые', sortProperty: 'price&order=asc' },
    { name: 'Сначала дорогие', sortProperty: 'price&order=desc' },
    { name: 'По названию', sortProperty: 'brand&order=asc' },
  ];
  //   sortBy=memory&order=desc

  const onFiltersSelect = (i) => {
    // setSelect(name);
    onClickSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__wrapper" onClick={() => setOpen(!open)}>
        <HiOutlineSwitchVertical />
        <span>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul className="sort__popup-list">
            {filters.map((item, i) => (
              <li
                key={i}
                onClick={() => onFiltersSelect(item)}
                className={
                  sort.sortProperty === item.sortProperty
                    ? 'sort__popup-item' + ' active'
                    : 'sort__popup-item'
                }>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
