import Menu from '../menu/Menu';
import Input from '../input/Input';
import './Header.scss';

const Header = () => {
  return (
    <section className="header">
      <div className="container header__container">
        <a href="#" className="logo">
          SMART-SHOP
        </a>
        <Input />
        <Menu />
      </div>
    </section>
  );
};

export default Header;
