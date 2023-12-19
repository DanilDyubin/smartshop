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
          <div className="cart__right">
            <h2 className="cart__right-title">Детали заказа</h2>
            <span className="cart__right-form--caption">Промокод</span>
            <div className="cart__right-form">
              <input
                type="text"
                className="cart__input cart__input-discount"
                placeholder="Ввести промокод"
              />
            </div>
            <span className="cart__right-form--caption">Номер вашей бонусной карты</span>
            <div className="cart__right-form">
              <input
                type="text"
                className="cart__input cart__input-bonus"
                placeholder="Ввести номер"
              />
              <button className="cart__btn">Apply</button>
            </div>
            <div className="cart__right-wrapper">
              <p className="cart__right-text">3 товара</p>
              <div className="cart__right-dashed"></div>
              <p className="cart__right-text">219 000 ₽</p>
            </div>
            <div className="cart__right-wrapper">
              <p className="cart__right-text cart__right-text--gray">Скидка по акции</p>
              <div className="cart__right-dashed"></div>
              <p className="cart__right-text cart__right-text--gray">0 ₽</p>
            </div>
            <div className="cart__right-text cart__right-text--discount">
              Управлять скидками вы сможете на шаге выбора способа оплаты
            </div>
            <div className="cart__right-wrapper">
              <p className="cart__right-text">Итого</p>
              <div className="cart__right-dashed"></div>
              <p className="cart__right-text">219 000 ₽</p>
            </div>
            <button className="cart__right-btn--checkout">Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
