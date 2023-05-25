import Header from "@components/Header";
import TasksList from "@components/TasksList";
import DeleteTaskModal from "@components/modals/DeleteTaskModal";
import AddEditTaskModal from "@components/modals/AddEditTaskModal";
import { useModal } from "src/hooks/useModal";
import { useState } from "react";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
} from "@store/services/tasksService";

const initialState = { title: "", description: "" };

const AllTasks: React.FC = () => {
  const { isOpen: isAddTaskModalOpen, toggle: toggleAddTaskModal } =
    useModal(false);
  const { isOpen: isDeleteTaskModalOpen, toggle: toggleDeleteTaskModal } =
    useModal(false);
  const { isOpen: isEditTaskModalOpen, toggle: toggleEditTaskModal } =
    useModal(false);
  const [addTaskForm, setAddTaskForm] = useState(initialState);
  const [idTask, setIdTask] = useState<number>(0);
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const onClearState = () => {
    setAddTaskForm({ ...initialState });
  };

  const onAddTask = () => {
    addTask(addTaskForm)
      .unwrap()
      .then(() => {
        setTimeout(toggleAddTaskModal, 100);
        onClearState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteTask = () => {
    deleteTask(idTask)
      .unwrap()
      .then(() => {
        setTimeout(toggleDeleteTaskModal, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="m-5">
        <Header {...{ toggleAddTaskModal }} />
        <TasksList
          {...{
            toggleDeleteTaskModal,
            toggleEditTaskModal,
            setIdTask,
          }}
        />
      </div>
      <DeleteTaskModal
        {...{
          isDeleteTaskModalOpen,
          toggleDeleteTaskModal,
          onDeleteTask,
        }}
      />
      <AddEditTaskModal
        isModalOpen={isAddTaskModalOpen}
        onHideFunc={() => {
          toggleAddTaskModal();
          onClearState();
        }}
        onSubmit={onAddTask}
        taskForm={addTaskForm}
        setTaskForm={setAddTaskForm}
        title="add task"
      />
      <AddEditTaskModal
        isModalOpen={isEditTaskModalOpen}
        onHideFunc={() => {
          toggleEditTaskModal();
          onClearState();
        }}
        onSubmit={onAddTask}
        taskForm={addTaskForm}
        setTaskForm={setAddTaskForm}
        title="edit task"
      />
    </>
  );
};

export default AllTasks;
