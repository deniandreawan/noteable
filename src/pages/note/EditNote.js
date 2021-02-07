import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editNote } from "../../redux/actions/noteActions";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useDidMount from "../../hooks/useDidMount";
import NoteForm from "../../components/NoteForm";

const EditNote = (props) => {
  const note = useSelector((state) =>
    state.notes.find((note) => note.id === props.match.params.id)
  );
  const dispatch = useDispatch();
  const didMount = useDidMount();

  useDocumentTitle("Noteable | Edit Note");
  useEffect(() => {
    if (!didMount) {
      handleError();
    }
  });

  const handleError = () => {
    if (!note) {
      props.history.push("/error");
    }
  };

  const onSubmitHandler = (note) => {
    dispatch(editNote(note.id, note));
    props.history.push("/");
  };

  return (
    <div className="fadeIn">
      <h2 className="header-title">Edit Note</h2>
      <NoteForm onSubmit={onSubmitHandler} note={note} />
    </div>
  );
};

export default EditNote;
