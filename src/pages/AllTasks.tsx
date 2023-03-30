import Header from "@components/Header";
import TasksList from "@components/TasksList";
import React from "react";

const AllTasks: React.FC = () => {
  return (
    <>
      <Header />
      <TasksList />
    </>
  );
};

export default AllTasks;
