import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiHome, HiViewList, HiShoppingCart, HiUser } from 'react-icons/hi';
import './menu.scss';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('Каталог');

  const menuData = [
    { name: 'Каталог', icon: <HiViewList className="menu__icon" />, route: '/' },
    { name: 'Корзина', icon: <HiShoppingCart className="menu__icon" />, route: '/cart' },
    { name: 'Профиль', icon: <HiUser className="menu__icon" />, route: '/profile' },
  ];

  const onChangeMenu = (name) => {
    setActiveMenu(name);
  };

  const menu = menuData.map(({ name, icon, route }, i) => {
    return (
      <li key={i} className="menu__item">
        <Link
          to={route}
          className={activeMenu === name ? 'menu__link active-link' : 'menu__link'}
          onClick={() => onChangeMenu(name)}>
          {icon}
          <span className="menu__text">{name}</span>
        </Link>
      </li>
    );
  });

  return (
    <div className="menu">
      <nav className="menu__nav">
        <ul className="menu__list list-reset">{menu}</ul>
      </nav>
    </div>
  );
};

export default Menu;
