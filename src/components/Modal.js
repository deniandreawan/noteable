import React from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";

const ReactModal = ({ isOpenModal, closeModal, children }) => {
  const modalStyle = {
    modal: {
      background: "#fff",
      padding: "50px",
      textAlign: "left",
      borderRadius: "10px",
      maxWidth: "400px",
    },
    closeButton: {
      top: "10px",
      right: "10px",
      background: "transparent",
      boxShadow: "none",
    },
    closeIcon: {
      fill: "#1a1a1a",
    },
  };

  return (
    <Modal center onClose={closeModal} open={isOpenModal} styles={modalStyle}>
      {children}
    </Modal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  closeModal: PropTypes.func,
  isOpenModal: PropTypes.bool,
};

export default ReactModal;
