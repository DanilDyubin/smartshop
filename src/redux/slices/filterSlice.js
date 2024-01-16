import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkboxValue: [],
  currentPage: 1,
  sort: { name: 'Сначала популярные', sortProperty: 'id&order=asc' },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCheckboxValue: (state, action) => {
      state.checkboxValue = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCheckboxValue, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
