import { HiOutlineSearch } from 'react-icons/hi';
import styles from './Input.module.css';

const Input = ({ searchValue }) => {
  return (
    <form className={styles['search-form']}>
      <button className={styles.btn}>
        <HiOutlineSearch className={styles.icon} />
      </button>
      <input value={searchValue} className={styles.input} type="search" placeholder="Поиск" />
    </form>
  );
};

export default Input;
