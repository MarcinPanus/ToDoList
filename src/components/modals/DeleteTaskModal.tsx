import { Button, Modal } from "react-bootstrap";
import { IDeleteTaskModalProps } from "task-types";

const DeleteTaskModal: React.FC<IDeleteTaskModalProps> = (props) => {
  const { isDeleteTaskModalOpen, toggleDeleteTaskModal, onDeleteTask } =
    props;

  return (
    <Modal show={isDeleteTaskModalOpen} onHide={toggleDeleteTaskModal}>
      <Modal.Header closeButton>
        <Modal.Title>delete task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>are you sure you want to delete this task from the list?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleDeleteTaskModal}>
          cancel
        </Button>
        <Button variant="danger" onClick={onDeleteTask}>
          delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
