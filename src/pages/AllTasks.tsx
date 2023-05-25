import Header from "@components/Header";
import TasksList from "@components/TasksList";
import AddTaskModal from "@components/modals/AddTaskModal";
import DeleteTaskModal from "@components/modals/DeleteTaskModal";
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
        <Header {...{ isAddTaskModalOpen, toggleAddTaskModal }} />
        <TasksList
          {...{
            isDeleteTaskModalOpen,
            toggleDeleteTaskModal,
            isEditTaskModalOpen,
            toggleEditTaskModal,
            idTask,
            setIdTask,
          }}
        />
      </div>
      <AddTaskModal
        {...{
          isAddTaskModalOpen,
          toggleAddTaskModal,
          addTaskForm,
          setAddTaskForm,
          onClearState,
          onAddTask,
        }}
      />
      <DeleteTaskModal
        {...{
          isDeleteTaskModalOpen,
          toggleDeleteTaskModal,
          onDeleteTask,
        }}
      />
    </>
  );
};

export default AllTasks;
