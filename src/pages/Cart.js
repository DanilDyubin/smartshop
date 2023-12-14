import CartItem from '../components/cartItem/CartItem';
import { Link } from 'react-router-dom';
import './cart.scss';

const Cart = () => {
  return (
    <section className="cart">
      <div className="container cart__container">
        <div className="cart__nav">
          <Link to="/">
            <span className="cart__subtitle notactive">Каталог /</span>
          </Link>
          <span className="cart__subtitle">Корзина</span>
        </div>
        <h2 className="cart__title title">Корзина</h2>
        <div className="cart__content">
          <div className="cart__left">
            <ul className="cart__list list-reset">
              <li className="cart__list-item">
                <CartItem />
              </li>
              <li className="cart__list-item">
                <CartItem />
              </li>
              <li className="cart__list-item">
                <CartItem />
              </li>
            </ul>
          </div>
          <div className="cart__right">Order summary</div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
