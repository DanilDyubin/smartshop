import { useState, useEffect, useContext } from 'react';
import { HiViewGrid, HiViewList } from 'react-icons/hi';
import axios from 'axios';
import Card from '../components/card/Card';
import Sort from '../components/sort/Sort';
import Filters from '../components/filters/Filters';
import Skeleton from '../components/Skeleton/Skeleton';
import { SearchContext } from '../app/App';

import { useSelector, useDispatch } from 'react-redux';
import { setCheckboxValue, setCurrentPage } from '../redux/slices/filterSlice';

import Pagination from '../components/pagination/Pagination';

import './catalog.scss';

const Catalog = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [sort, setSort] = useState({ name: 'Сначала популярные', sortProperty: 'id&order=asc' });
  // const [checkboxValue, setCheckboxValue] = useState([]);
  const checkboxValue = useSelector((state) => state.filter.checkboxValue);
  const sort = useSelector((state) => state.filter.sort);
  const currentPage = useSelector((state) => state.filter.currentPage);
  // const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  console.log(phones);

  // const [currentPage, setCurrentPage] = useState(1); // т/к бэк не отдает массив телефонов и мы не можем на пагинации посчитать сколько будет страниц, придется кол-во страниц захардкодить
  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (i) => {
    dispatch(setCheckboxValue(i));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPhones = async () => {
    setLoading(true);

    const memoryFilter = checkboxValue > 0 ? `&memoryId=${checkboxValue}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    // fetch(
    //   `https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?page=${currentPage}&limit=8&${memoryFilter}&sortBy=${sort.sortProperty}${search}`,
    // ).then((res) =>
    //   res.json().then((arr) => {
    //     setPhones(arr);
    //     setLoading(false);
    //   }),
    // );
    await axios
      .get(
        `https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?page=${currentPage}&limit=8&${memoryFilter}&sortBy=${sort.sortProperty}${search}`,
      )
      .then((res) => {
        setPhones(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPhones();

    window.scrollTo(0, 0);
  }, [checkboxValue, sort, searchValue, currentPage]);

  // const onClickCheckbox = (checkbox) => {
  //   setCheckboxValue(checkbox);
  // };

  return (
    <section className="catalog">
      <div className="container catalog-container">
        <div className="catalog__subtitle">Каталог</div>
        <h2 className="catalog__title">Смартфоны</h2>
        <div className="catalog__header">
          <Sort />
          <div className="catalog__grid">
            <HiViewGrid className="catalog__grid-icon active-grid" />
            <HiViewList className="catalog__grid-icon" />
          </div>
        </div>
        <div className="catalog__content">
          <div className="catalog__filters">
            <Filters checkboxValue={checkboxValue} onChangeCategory={onChangeCategory} />
          </div>
          <div className="catalog__carts">
            <ul className="catalog__list">
              {loading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : phones.map((items) => {
                    // const { id, ...itemsProps } = items;
                    return (
                      <li key={items.id} className="catalog__list-item">
                        <Card {...items} />
                      </li>
                    );
                  })}
            </ul>
            <div className="catalog__pagination">
              <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// https://run.mocky.io/v3/deb40cb1-2f9a-4b74-a82d-2587965df5f5
export default Catalog;
