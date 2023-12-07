import styles from './FiltersPopup.module.css';

const FiltersPopup = ({ name }) => {
  return (
    <div className={styles['filters-popup']}>
      <ul className={styles['filters-popup__list']}>
        <li className={styles['filters-popup__item']}>Сначала популярные</li>
        <li className={styles['filters-popup__item']}>Сначала дешевые</li>
        <li className={styles['filters-popup__item']}>Сначала дорогие</li>
        <li className={styles['filters-popup__item']}>По названию</li>
      </ul>
    </div>
  );
};

export default FiltersPopup;
