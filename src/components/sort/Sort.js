import { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

import { HiOutlineSwitchVertical } from 'react-icons/hi';
import './sort.scss';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const filters = [
    { name: 'Сначала популярные', sortProperty: 'id&order=asc' },
    { name: 'Сначала дешевые', sortProperty: 'price&order=asc' },
    { name: 'Сначала дорогие', sortProperty: 'price&order=desc' },
    { name: 'По названию', sortProperty: 'brand&order=asc' },
  ];

  const onFiltersSelect = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
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
