import { ADD_NOTE, DELETE_NOTE, DELETE_ALL_NOTE, EDIT_NOTE } from "../../constants/actionType";

export const addNote = (note) => ({
  type: ADD_NOTE,
  note,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
});

export const deleteAllNote = () => ({
  type: DELETE_ALL_NOTE,
});

export const editNote = (id, update) => ({
  type: EDIT_NOTE,
  id,
  update,
});
