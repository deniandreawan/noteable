import React, { useState, useRef } from "react";
import Icon from "react-eva-icons";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { history } from "../App";
import { deleteAllNote } from "../redux/actions/noteActions";
import Modal from "./Modal";

const Navigation = () => {
  const [isOpenNavigation, setOpenNavigation] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const nav = useRef(null);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllNote());
    history.push("/");
    setOpenModal(false);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const toggleNavigation = () => {
    setOpenNavigation(!isOpenNavigation);
    nav.current.classList.toggle("open");
  };

  return (
    <div className="navigation" ref={nav}>
      <Modal isOpenModal={isOpenModal} closeModal={closeModalHandler}>
        <h2>Sure to delete all notes?</h2>
        <button className="button--delete" onClick={handleDeleteAll}>
          Yes, Delete All
        </button>
      </Modal>
      <div className="navigation-wrapper">
        <div className="navigation-logo">
          <Link to="/">
            <h1>noteable</h1>
          </Link>
        </div>
        <div className="navigation-controls">
          <Link className="button--link" onClick={toggleNavigation} to="/add">
            <button className="button--add button--icon">
              <span>Add Note</span>
              <Icon name="plus-square" color="#fff" />
            </button>
          </Link>
          <br />
          <button className="button--delete button--icon" onClick={openModalHandler}>
            <span>Delete All</span>
            <Icon name="trash-2" color="#fff" />
          </button>
        </div>
      </div>
      <div className="navigation-toggle">
        <button onClick={toggleNavigation}>
          <Icon name="menu" size="large" fill="black" />
        </button>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
