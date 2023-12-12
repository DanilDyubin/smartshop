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
      </div>
    </section>
  );
};
export default Cart;
