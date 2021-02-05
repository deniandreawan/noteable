import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterNote from "../../components/FilterNote";
import NoteItem from "../../components/NoteItem";
import filterNote from "../../helpers/filterNote";

import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const { notes, filter } = useSelector((state) => ({
    notes: filterNote(state.notes, state.filter),
    filter: state.filter,
  }));

  useDocumentTitle();
  useEffect(() => {
    window.scrollTo(null, 0);
  }, []);

  return (
    <>
      <div className="note-list-main fadeIn">
        <div className="note-list-header">
          <h2 className="header-title">My Notes</h2>
          <FilterNote />
        </div>
        {filter.title && notes.length !== 0 && (
          <h4 className="filter__text">
            Found {notes.length}
            {` ${notes.length > 1 ? "notes" : "note"}`}
          </h4>
        )}
        <div className="card-wrapper">
          {notes.length !== 0 && notes.map((note) => <NoteItem key={note.id} note={note} />)}
        </div>
        {notes.length === 0 && (
          <div className="note__empty">
            <h2>No Note Found</h2>
            <p>Start listing your note now. Your data will be saved to your localStorage.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
