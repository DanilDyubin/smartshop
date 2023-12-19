import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        activeClassName={styles.active}
        breakLabel="..."
        nextLabel={<HiOutlineChevronRight />}
        onPageChange={(event) => onChangePage(event.selected + 1)} // по клику на страницы библиотека возвращает объект с ее индексом {event: 0}, делаем 0 + 1, чтобы первая стр была 1
        pageRangeDisplayed={8}
        pageCount={2}
        forcePage={currentPage - 1}
        previousLabel={<HiOutlineChevronLeft />}
        renderOnZeroPageCount={null}
        pageClassName={styles.page}
      />
    </>
  );
};

export default Pagination;
