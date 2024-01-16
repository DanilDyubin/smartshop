import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import { HiOutlineMinusSm, HiOutlinePlusSm, HiOutlineTrash } from 'react-icons/hi';
import './cartItem.scss';

const CartItem = ({ id, imageUrl2, title, memory, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
    if (count < 1) {
      dispatch(removeItem(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__img">
          <img src={imageUrl2} alt="phone" />
        </div>
        <div className="cart-item__information">
          <h3 className="cart-item__title">{title}</h3>
          {/* <div className="cart-item__memory">{memory} ГБ</div> */}
          <span className="cart-item__available available">В наличии</span>
        </div>
      </div>
      <div className="cart-item__btn-block">
        <div className="cart-item__minus" onClick={onClickMinus}>
          <HiOutlineMinusSm className="cart-item__icon" />
        </div>
        <div className="cart-item__counter">
          <span className="cart-item__number">{count}</span>
        </div>
        <div className="cart-item__plus" onClick={onClickPlus}>
          <HiOutlinePlusSm className="cart-item__icon" />
        </div>
      </div>
      <div className="cart-item__price">{price * count}</div>
      <div className="cart-item__delete" onClick={onClickRemove}>
        <HiOutlineTrash className="cart-item__icon" style={{ fontSize: '22px' }} />
      </div>
    </div>
  );
};

export default CartItem;
