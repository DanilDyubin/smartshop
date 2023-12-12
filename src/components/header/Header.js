import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import Input from '../input/Input';
import './Header.scss';

const Header = () => {
  return (
    <section className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          SMART-SHOP
        </Link>
        <Input />
        <Menu />
      </div>
    </section>
  );
};

export default Header;
