import Input from '../input/Input';
import './searchSection.scss';

const searchSection = () => {
  return (
    <section className="search-section">
      <div className="container">
        <a href="#" className="logo">
          SMART-SHOP
        </a>
        <Input />
      </div>
    </section>
  );
};

export default searchSection;
