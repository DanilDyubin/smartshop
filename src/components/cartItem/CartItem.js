import { HiOutlineMinusSm, HiOutlinePlusSm, HiOutlineTrash } from 'react-icons/hi';
import img from '../../assets/img/phones/iphone14/iphone14-1.webp';
import './cartItem.scss';

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__img">
          <img src={img} alt="phone" />
        </div>
        <div className="cart-item__information">
          <h3 className="cart-item__title">Смартфон Apple iPhone 14</h3>
          <div className="cart-item__memory">64 ГБ</div>
          <span className="cart-item__available available">В наличии</span>
        </div>
      </div>
      <div className="cart-item__btn-block">
        <div className="cart-item__minus">
          <HiOutlineMinusSm className="cart-item__icon" />
        </div>
        <div className="cart-item__counter">
          <span className="cart-item__number">1</span>
        </div>
        <div className="cart-item__plus">
          <HiOutlinePlusSm className="cart-item__icon" />
        </div>
      </div>
      <div className="cart-item__price">70 850 ₽</div>

      <div className="cart-item__delete">
        <HiOutlineTrash className="cart-item__icon" style={{ fontSize: '22px' }} />
      </div>
    </div>
  );
};

export default CartItem;
