import styles from './Checkbox.module.css';

const Checkbox = ({ id, label }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles['custom-checkbox']}>
        <input type="checkbox" id={id} name="name" />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
