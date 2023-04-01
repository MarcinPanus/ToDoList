import { useAddTaskQuery } from "@store/services/tasksService";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IModalProps, IModalAddTaksProps } from "task-types";

const AddTaskModal: React.FC<IModalProps> = (props) => {
  const { show, setShow } = props;
  const [addTaskForm, SetAddTaskForm] = useState<IModalAddTaksProps>({
    title: "",
    description: "",
  });

  const handleClose = () => {
    setShow(false);
    SetAddTaskForm({ title: "", description: "" });
  };

  const addTask = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
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
        <Button variant="secondary" onClick={handleClose}>
          close
        </Button>
        <Button
          variant="primary"
          onClick={addTask}
          disabled={addTaskForm.title.length < 3}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;
