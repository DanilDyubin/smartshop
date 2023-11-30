import { HiOutlineHeart } from 'react-icons/hi';
import Button from '../button/Button';
import phone from '../../assets/img/Phone.png';
import './cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__img">
        <img src={phone} alt="phone-img" />
      </div>
      <div className="cart__dots">
        <span className="cart__dot"></span>
        <span className="cart__dot active-dot"></span>
        <span className="cart__dot"></span>
      </div>
      <h2 className="cart__title">Смартфон Apple iPhone 14 128GB</h2>
      <span className="cart__price">84 999 ₽</span>
      <div className="cart__bottom">
        <span className="cart__available">В наличии</span>
        <button className="cart__btn btn-reset">
          <HiOutlineHeart className="cart__btn-icon" />
        </button>
      </div>
      <Button name="В корзину" />
    </div>
  );
};

export default Cart;
