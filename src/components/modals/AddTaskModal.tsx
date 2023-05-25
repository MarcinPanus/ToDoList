import { Button, Form, Modal } from "react-bootstrap";
import { IAddTaskModalProps } from "task-types";

const AddTaskModal: React.FC<IAddTaskModalProps> = (props) => {
  const {
    isAddTaskModalOpen,
    toggleAddTaskModal,
    addTaskForm,
    setAddTaskForm,
    onClearState,
    onAddTask,
  } = props;

  return (
    <Modal
      show={isAddTaskModalOpen}
      onHide={() => {
        toggleAddTaskModal();
        onClearState();
      }}
    >
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
                setAddTaskForm({ ...addTaskForm, title: e.target.value })
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
                setAddTaskForm({ ...addTaskForm, description: e.target.value })
              }
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            toggleAddTaskModal();
            onClearState();
          }}
        >
          close
        </Button>
        <Button
          variant="primary"
          onClick={onAddTask}
          disabled={addTaskForm.title.length < 3}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;
