import { useAddTaskMutation } from "@store/services/tasksService";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IModalAddProps, IModalAddTaksProps } from "task-types";

const AddTaskModal: React.FC<IModalAddProps> = (props) => {
  const { isAddEmployeeModalOpen, toggleAddEmployeeModal } = props;

  const [addTask, { isLoading }] = useAddTaskMutation();
  const [addTaskForm, SetAddTaskForm] = useState<IModalAddTaksProps>({
    title: "",
    description: "",
  });

  const addTaskFunc = () => {
    addTask(addTaskForm)
      .unwrap()
      .then(() => {
        setTimeout(toggleAddEmployeeModal, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal show={isAddEmployeeModalOpen} onHide={toggleAddEmployeeModal}>
      <Modal.Header closeButton>
        <Modal.Title>add task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title-input">task title</Form.Label>
            <Form.Control
              id="title-input"
              placeholder="type task title here"
              value={addTaskForm.title}
              onChange={(e) =>
                SetAddTaskForm({ ...addTaskForm, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description-input">
              task description
            </Form.Label>
            <Form.Control
              as="textarea"
              id="description-input"
              placeholder="type task description here"
              value={addTaskForm.description}
              onChange={(e) =>
                SetAddTaskForm({ ...addTaskForm, description: e.target.value })
              }
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleAddEmployeeModal}>
          close
        </Button>
        <Button
          variant="primary"
          onClick={addTaskFunc}
          disabled={addTaskForm.title.length < 3 || isLoading}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;
