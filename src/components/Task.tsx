import { Accordion } from "react-bootstrap";
import { ITaskProps } from "task-types";

const Task: React.FC<ITaskProps> = (props) => {
  const { _id, title, description } = props;

  return (
    <Accordion.Item eventKey={`${_id}`}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{description}</Accordion.Body>
    </Accordion.Item>
  );
};

export default Task;
