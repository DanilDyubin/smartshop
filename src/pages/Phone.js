import { Link } from 'react-router-dom';
import './phone.scss';

const Phone = () => {
  return (
    <section className="phone">
      <div className="container phone__container">
        <div className="phone__nav">
          <Link to="/">
            <span className="phone__subtitle notactive">Каталог /</span>
          </Link>
          <span className="phone__subtitle">Карточка товара</span>
        </div>
        <h2 className="phone__title title">Apple</h2>
      </div>
    </section>
  );
};

export default Phone;
