import {
  FILTER_TITLE,
  SORT_BY_DATE,
  SORT_BY_TITLE,
  ORDER_ASCENDING,
  ORDER_DESCENDING,
} from "../../constants/actionType";

const initialState = {
  title: "",
  sortBy: "date",
  order: "ascending",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: "date",
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        sortBy: "title",
      };
    case ORDER_ASCENDING:
      return {
        ...state,
        order: "ascending",
      };
    case ORDER_DESCENDING:
      return {
        ...state,
        order: "descending",
      };
    default:
      return state;
  }
};

export default filterReducer;
