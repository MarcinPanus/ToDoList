import React from "react";
import { Button } from "react-bootstrap";
import { useModal } from "src/hooks/useModal";
import { IModalProps } from "task-types";

const Header: React.FC<IModalProps> = () => {
  const { isOpen: isAddEmployeeModalOpen, toggle: toggleAddEmployeeModal } =
    useModal();
  console.log(isAddEmployeeModalOpen);
  return (
    <div className="card-body m-5">
      <h2 className="card-title text-center mb-3">task list</h2>
      <div className="card-text row justify-content-md-center h5 mb-3">
        here&apos;s a list of all your tasks, if you want to add a task, <br />
        press the button below
      </div>
      <div className="d-grid gap-2 col-2 mx-auto">
        <Button className="btn btn-primary" onClick={toggleAddEmployeeModal}>
          add task
        </Button>
      </div>
    </div>
  );
};

export default Header;
