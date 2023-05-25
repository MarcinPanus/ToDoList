import { Accordion, Button } from "react-bootstrap";
import { Circle, CheckCircleFill } from "react-bootstrap-icons";
import { ITaskProps } from "task-types";

const Task: React.FC<ITaskProps> = (props) => {
  const {
    _id,
    title,
    description,
    done,
    toggleDeleteTaskModal,
    toggleEditTaskModal,
    setIdTask,
  } = props;

  return (
    <Accordion.Item eventKey={`${_id}`}>
      <Accordion.Header>
        {done ? (
          <CheckCircleFill className="mx-2 text-success" />
        ) : (
          <Circle className="mx-2" />
        )}

        {done ? <del>title</del> : title}
      </Accordion.Header>
      <Accordion.Body>
        <div>{description}</div>
        <div className="mt-2">
          <Button
            className="btn btn-danger m-1"
            onClick={() => {
              toggleDeleteTaskModal();
              setIdTask(_id);
            }}
          >
            delete
          </Button>
          {!done && (
            <Button
              className="btn btn-warning"
              onClick={() => {
                toggleEditTaskModal();
                setIdTask(_id);
              }}
            >
              edit
            </Button>
          )}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Task;
