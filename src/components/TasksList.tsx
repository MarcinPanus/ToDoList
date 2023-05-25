import { ITaskProps, ITasksListProps } from "task-types";
import Accordion from "react-bootstrap/Accordion";
import Task from "./Task";
import { useGetAllTasksQuery } from "@store/services/tasksService";

const TasksList: React.FC<ITasksListProps> = (props) => {
  const { toggleDeleteTaskModal, setIdTask, toggleEditTaskModal } = props;
  const { tasks, isFetching } = useGetAllTasksQuery(
    {},
    {
      selectFromResult: ({ data, isFetching }) => ({
        tasks: data || [],
        isFetching,
      }),
    }
  );

  if (isFetching) {
    return (
      <div className="d-flex justify-content-center">
        <h5>loading...</h5>
      </div>
    );
  }

  return (
    <Accordion className="d-grid gap-2 col-9 mx-auto" defaultActiveKey="0">
      {tasks.map((task: ITaskProps) => (
        <Task
          {...{
            toggleDeleteTaskModal,
            setIdTask,
            toggleEditTaskModal,
          }}
          key={task._id}
          _id={task._id}
          title={task.title}
          description={task.description}
          done={task.done}
        />
      ))}
    </Accordion>
  );
};

export default TasksList;
