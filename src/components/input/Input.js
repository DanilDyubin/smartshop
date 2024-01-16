import { useState, useContext, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { SearchContext } from '../../app/App';

import styles from './Input.module.css';

const Input = () => {
  const [value, setValue] = useState(''); // создаем еще локальное состояние, такое же как и в useContext для debounce
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef(null);

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      // сохранили ссылку на ф-ю и сделали ее отложенной, и эту ф-ю мы будем вызывать каждый раз когда будет меняться инпут
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <form className={styles['search-form']}>
      <HiOutlineSearch className={styles.search} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск"
      />
      <HiOutlineX className={styles.clear} onClick={onClickClear} />
    </form>
  );
};

export default Input;
