import { Accordion, Button } from "react-bootstrap";
import { ITaskProps } from "task-types";
import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons";

const Task: React.FC<ITaskProps> = (props) => {
  const { _id, title, description, done } = props;

  return (
    <Accordion.Item eventKey={`${_id}`}>
      <Accordion.Header>
        {done ? (
          <CheckCircleFill className="mx-2 text-success" />
        ) : (
          <CheckCircle className="mx-2 text-danger" />
        )}

        {title}
      </Accordion.Header>
      <Accordion.Body>
        <div>{description}</div>
        <div className="mt-2">
          <Button className="btn btn-danger m-1">delete</Button>
          {!done && <Button className="btn btn-warning">edit</Button>}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Task;
