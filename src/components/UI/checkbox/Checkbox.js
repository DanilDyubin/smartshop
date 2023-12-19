import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles['custom-checkbox']}>
        <input type="checkbox" value={id + 1} onChange={handleChange} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
