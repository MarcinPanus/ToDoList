import Header from "@components/Header";
import TasksList from "@components/TasksList";
import AddTaskModal from "@components/modals/AddTaskModal";
import { Button, Modal } from "react-bootstrap";
import { useModal } from "src/hooks/useModal";

const AllTasks: React.FC = () => {
  const { isOpen: isAddEmployeeModalOpen, toggle: toggleAddEmployeeModal } =
    useModal(false);

  return (
    <>
      <div className="m-5">
        <Header {...{ isAddEmployeeModalOpen, toggleAddEmployeeModal }} />
        <TasksList />
      </div>
      <AddTaskModal {...{ isAddEmployeeModalOpen, toggleAddEmployeeModal }} />
    </>
  );
};

export default AllTasks;
