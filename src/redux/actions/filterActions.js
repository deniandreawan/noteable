import {
  FILTER_TITLE,
  SORT_BY_DATE,
  SORT_BY_TITLE,
  ORDER_ASCENDING,
  ORDER_DESCENDING,
} from "../../constants/actionType";

export const setTitleFilter = (title = "") => ({
  type: FILTER_TITLE,
  title,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});

export const orderAscending = () => ({
  type: ORDER_ASCENDING,
});

export const orderDescending = () => ({
  type: ORDER_DESCENDING,
});
