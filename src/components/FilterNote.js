import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-eva-icons";

import {
  setTitleFilter,
  sortByDate,
  sortByTitle,
  orderAscending,
  orderDescending,
} from "../redux/actions/filterActions.js";

const FilterNote = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const onSortChange = (e) => {
    const selected = e.target.value;
    if (selected === "date") {
      dispatch(sortByDate());
    }
    if (selected === "title") {
      dispatch(sortByTitle());
    }
  };

  const onOrderChange = (e) => {
    const order = e.target.value;
    if (order === "ascending") {
      dispatch(orderAscending());
    }
    if (order === "descending") {
      dispatch(orderDescending());
    }
  };

  return (
    <div className="filter__note">
      <div className="filter__title">
        <input onChange={onChangeHandler} placeholder="Search" type="text" value={filter.title} />
        <Icon fill="#a1a1a1" name="search" />
      </div>
      <div className="filter__sort">
        <select name="sort" id="sort" onChange={onSortChange}>
          <option value="date">Sort By Date</option>
          <option value="title">Sort By Title</option>
        </select>
        <select name="order" id="order" onChange={onOrderChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterNote;
