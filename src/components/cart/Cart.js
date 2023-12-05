import { HiOutlineHeart } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Button from '../button/Button';
import phone1 from '../../assets/img/phones/iphone14/iphone14-1.webp';
import phone2 from '../../assets/img/phones/iphone14/iphone14-2.webp';
import phone3 from '../../assets/img/phones/iphone14/iphone14-3.webp';
import './cart.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';

const Cart = () => {
  return (
    <div className="cart">
      <Swiper
        pagination={{
          clickable: true,
          el: '.cart-pagination',
          type: 'bullets',
          bulletClass: 'cart-bullet',
          bulletActiveClass: 'cart-bullet-active',
        }}
        modules={[Pagination]}
        //   spaceBetween={50}
        slidesPerView={1}
        className="cart-swiper">
        <div className="swiper-container cart-swiper-container">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img src={phone1} alt="phone-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={phone2} alt="phone-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={phone3} alt="phone-img" />
            </SwiperSlide>
          </div>
        </div>
        <div className="cart-pagination"></div>
      </Swiper>
      {/* <div className="cart__img">
        <img src={phone} alt="phone-img" />
      </div>
      <div className="cart__dots">
        <span className="cart__dot"></span>
        <span className="cart__dot active-dot"></span>
        <span className="cart__dot"></span>
      </div> */}
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
