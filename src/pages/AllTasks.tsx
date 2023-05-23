import Header from "@components/Header";
import TasksList from "@components/TasksList";
import AddTaskModal from "@components/modals/AddTaskModal";
import DeleteTaskModal from "@components/modals/DeleteTaskModal";
import { useModal } from "src/hooks/useModal";
import { useState } from "react";

const AllTasks: React.FC = () => {
  const { isOpen: isAddEmployeeModalOpen, toggle: toggleAddEmployeeModal } =
    useModal(false);
  const {
    isOpen: isDeleteEmployeeModalOpen,
    toggle: toggleDeleteEmployeeModal,
  } = useModal(false);
  const [idTask, setIdTask] = useState<number>(0);

  return (
    <>
      <div className="m-5">
        <Header {...{ isAddEmployeeModalOpen, toggleAddEmployeeModal }} />
        <TasksList
          {...{
            isDeleteEmployeeModalOpen,
            toggleDeleteEmployeeModal,
            idTask,
            setIdTask,
          }}
        />
      </div>
      <AddTaskModal {...{ isAddEmployeeModalOpen, toggleAddEmployeeModal }} />
      <DeleteTaskModal
        {...{
          isDeleteEmployeeModalOpen,
          toggleDeleteEmployeeModal,
          idTask,
          setIdTask,
        }}
      />
    </>
  );
};

export default AllTasks;
