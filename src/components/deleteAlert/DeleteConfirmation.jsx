import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({
  showModal,
  hideModal,
  confirmModal,
  id,
  message,
}) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert fs-6">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={() => confirmModal(id)}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
