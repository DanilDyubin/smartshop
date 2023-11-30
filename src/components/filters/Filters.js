import './filters.scss';

const Filters = () => {
  return (
    <section className="filters">
      <div className="filters__caption">Цена, ₽</div>
      <div className="filters__price">
        <input type="text" className="filters__price-input" />
        <input type="text" className="filters__price-input" />
        <div className="filters__price-element"></div>
      </div>
      <div className="filters__caption">Встроенная память</div>
    </section>
  );
};

export default Filters;
