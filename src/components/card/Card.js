import { HiOutlineHeart } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
// import phone1 from '../../assets/img/phones/iphone14/iphone14-1.webp';
// import phone2 from '../../assets/img/phones/iphone14/iphone14-2.webp';
// import phone3 from '../../assets/img/phones/iphone14/iphone14-3.webp';
import './card.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';

const Card = ({ id, imageUrl1, imageUrl2, imageUrl3, title, price }) => {
  return (
    <div className="card">
      <Swiper
        pagination={{
          clickable: true,
          el: '.card-pagination',
          type: 'bullets',
          bulletClass: 'card-bullet',
          bulletActiveClass: 'card-bullet-active',
        }}
        modules={[Pagination]}
        //   spaceBetween={50}
        slidesPerView={1}
        className="card-swiper">
        <div className="swiper-container card-swiper-container">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Link to={`/${id}`}>
                <img src={imageUrl1} alt="phone-img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${id}`}>
                <img src={imageUrl2} alt="phone-img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${id}`}>
                <img src={imageUrl3} alt="phone-img" />
              </Link>
            </SwiperSlide>
          </div>
        </div>
        <div className="card-pagination"></div>
      </Swiper>
      <h2 className="card__title">Смартфон {title}</h2>
      <Link to={`/phone/${id}`}>
        <span className="card__price">{price} ₽</span>
      </Link>
      {/* <span className="card__price">{price} ₽</span> */}
      <div className="card__bottom">
        <span className="card__available available">В наличии</span>
        <button className="card__btn btn-reset">
          <HiOutlineHeart className="card__btn-icon" />
        </button>
      </div>
      <Button name="В корзину" />
    </div>
  );
};

export default Card;
