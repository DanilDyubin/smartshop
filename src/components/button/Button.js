import styles from './Button.module.scss';

const Button = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
