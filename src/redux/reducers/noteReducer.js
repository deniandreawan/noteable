import { ADD_NOTE, DELETE_NOTE, DELETE_ALL_NOTE, EDIT_NOTE } from "../../constants/actionType";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
    case DELETE_ALL_NOTE:
      return [];
    case EDIT_NOTE:
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.update,
          };
        }
        return note;
      });
    default:
      return state;
  }
};

export default noteReducer;
