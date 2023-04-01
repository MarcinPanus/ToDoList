import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IModalProps } from "task-types";

const DeleteTaskModal: React.FC<IModalProps> = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  return (
    <Modal show={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>delete task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>are you sure you want to delete this task from the list?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          cancel
        </Button>
        <Button variant="danger">delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
