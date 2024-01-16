import { Link } from 'react-router-dom';
import img from '../../assets/img/loaderCart.gif';

import './cartEmpty.scss';

const cartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2 className="cart-empty__subtitle">Ваша корзина пуста</h2>
      <img className="cart-empty__img" src={img} alt="" />
      <p className="cart-empty__txt">Добавьте товары из каталога</p>
      <Link to="/" className="cart-empty__link">
        Перейти в каталог
      </Link>
    </div>
  );
};

export default cartEmpty;
