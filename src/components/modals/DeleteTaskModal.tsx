import React from "react";
import { useDeleteTaskMutation } from "@store/services/tasksService";
import { Button, Modal } from "react-bootstrap";
import { IModalDeleteProps } from "task-types";

const DeleteTaskModal: React.FC<IModalDeleteProps> = (props) => {
  const { isDeleteEmployeeModalOpen, toggleDeleteEmployeeModal, idTask } =
    props;
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const deleteTaskFunc = () => {
    deleteTask(idTask)
      .unwrap()
      .then(() => {
        setTimeout(toggleDeleteEmployeeModal, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal show={isDeleteEmployeeModalOpen} onHide={toggleDeleteEmployeeModal}>
      <Modal.Header closeButton>
        <Modal.Title>delete task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>are you sure you want to delete this task from the list?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleDeleteEmployeeModal}>
          cancel
        </Button>
        <Button variant="danger" onClick={deleteTaskFunc}>
          delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
