import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "react-eva-icons";
import PropTypes from "prop-types";
import moment from "moment";

import { history } from "../App";
import { deleteNote } from "../redux/actions/noteActions";
import Modal from "./Modal";
import thumbBg from "../assets/images/thumbnail.jpg";

const NoteItem = ({ note }) => {
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [isOpenNoteModal, setOpenNoteModal] = useState(false);
  const dispatch = useDispatch();

  const openModalHandler = () => {
    setOpenDeleteModal(true);
  };

  const openNoteModal = () => {
    setOpenNoteModal(true);
  };

  const closeModalHandler = () => {
    setOpenDeleteModal(false);
    setOpenNoteModal(false);
    history.push("/");
  };

  const onDelete = () => {
    dispatch(deleteNote(note.id));
    setOpenNoteModal(false);
  };

  return (
    <div className="card">
      <Modal closeModal={closeModalHandler} isOpenModal={isOpenDeleteModal}>
        <h2>Sure to delete this note?</h2>
        <span
          style={{
            color: "#cacaca",
            fontSize: "14px",
            display: "block",
            marginBottom: "20px",
          }}
        >
          {note.title}
        </span>
        <button className="button--delete" onClick={onDelete}>
          Delete
        </button>
      </Modal>
      <Modal closeModal={closeModalHandler} isOpenModal={isOpenNoteModal}>
        <div className="note-modal">
          <div className="card-image">
            <img alt={note.title} src={note.image ? note.image : thumbBg} />
          </div>

          <div className="note-items">
            <h2>{note.title}</h2>
            {note.description && <p className="card-subtitle">{note.description}</p>}
          </div>
        </div>
      </Modal>
      <div
        className="card-header"
        onClick={openNoteModal}
        style={{
          background: `url(${note.image ? note.image : thumbBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-header-title">
          <h2 className="card-title">{note.title}</h2>
          <span className="card-date">{moment(note.createdAt).format("llll")}</span>
        </div>
      </div>
      <div className="card-actions">
        <div className="card-action-wrapper">
          <Link className="button--action" to={`/edit/note/${note.id}`}>
            <Icon name="edit" fill="#a1a1a1" />
          </Link>
        </div>
        <div className="card-action-wrapper">
          <button className="button--action" onClick={openModalHandler}>
            <Icon name="trash-2" fill="#a1a1a1" />
          </button>
        </div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object,
};

export default withRouter(NoteItem);
