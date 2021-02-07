import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNote } from "../../redux/actions/noteActions";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import NoteForm from "../../components/NoteForm";

const AddNote = (props) => {
  const dispatch = useDispatch();

  useDocumentTitle("Noteable | Add Note");
  useState(() => {
    window.scrollTo(null, 0);
  }, []);

  const onSubmit = (note) => {
    dispatch(addNote(note));
    props.history.push("/");
  };

  return (
    <div className="fadeIn">
      <h2 className="header-title">Add Note</h2>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddNote;
