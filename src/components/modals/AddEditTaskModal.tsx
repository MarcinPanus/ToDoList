import { Button, Form, Modal } from "react-bootstrap";
import { IAddEditTaskModal } from "task-types";

const AddEditTaskModal: React.FC<IAddEditTaskModal> = (props) => {
  const { isModalOpen, onHideFunc, onSubmit, taskForm, setTaskForm } = props;

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {
        onHideFunc();
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
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
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
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, description: e.target.value })
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
            onHideFunc();
          }}
        >
          close
        </Button>
        <Button
          variant="primary"
          onClick={onSubmit}
          disabled={taskForm.title.length < 3}
        >
          save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditTaskModal;
