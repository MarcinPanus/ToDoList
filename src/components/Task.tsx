import { Accordion, Button } from "react-bootstrap";
import {
  Circle,
  CheckCircleFill,
  Check2Circle,
  XCircle,
  Trash3,
  Pen,
} from "react-bootstrap-icons";
import { ITaskProps } from "task-types";
import { useEditTaskMutation } from "@store/services/tasksService";

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

  const [editTask] = useEditTaskMutation();

  const onEditTask = () => {
    editTask({ id: _id, done: !done })
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Accordion.Item eventKey={`${_id}`}>
      <Accordion.Header>
        {done ? (
          <CheckCircleFill className="mx-2 text-success" />
        ) : (
          <Circle className="mx-2" />
        )}
        {done ? <del>{title}</del> : title}
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
            <Trash3 className="mx-1" />
            delete
          </Button>
          {!done && (
            <Button
              className="btn btn-warning m-1"
              onClick={() => {
                toggleEditTaskModal();
                setIdTask(_id);
              }}
            >
              <Pen className="mx-1" />
              edit
            </Button>
          )}
          <Button
            variant={done ? "outline-dark" : "outline-success"}
            className="m-1"
            onClick={onEditTask}
          >
            {done ? (
              <>
                <XCircle className="mx-1" />
                undone
              </>
            ) : (
              <>
                <Check2Circle className="mx-1" />
                done
              </>
            )}
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Task;
