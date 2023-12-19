import { useContext } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchContext } from '../../app/App';

import styles from './Input.module.css';

const Input = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <form className={styles['search-form']}>
      <button className={styles.btn}>
        <HiOutlineSearch className={styles.icon} />
      </button>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="search"
        placeholder="Поиск"
      />
    </form>
  );
};

export default Input;
