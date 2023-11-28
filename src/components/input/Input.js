import { HiOutlineSearch } from 'react-icons/hi';
import styles from './Input.module.css';

const Input = () => {
  return (
    <form className={styles['search-form']}>
      <button className={styles.btn}>
        <HiOutlineSearch className={styles.icon} />
      </button>
      <input className={styles.input} type="search" placeholder="Поиск" />
    </form>
  );
};

export default Input;
