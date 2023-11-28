import Menu from '../menu/Menu';
import './headerMobile.scss';

const HeaderMobile = () => {
  return (
    <header className="headerMobile">
      <div className="container">
        <Menu />
      </div>
    </header>
  );
};

export default HeaderMobile;
