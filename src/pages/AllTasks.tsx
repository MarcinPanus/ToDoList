import Header from "@components/Header";
import TasksList from "@components/TasksList";
import AddTaskModal from "@components/modals/AddTaskModal";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AllTasks: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="m-5">
        <Header {...{ show, setShow }} />
        <TasksList />
      </div>
      <AddTaskModal {...{ show, setShow }} />
    </>
  );
};

export default AllTasks;
