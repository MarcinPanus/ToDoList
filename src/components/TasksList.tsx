import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import { ITaskProps } from "task-types";
import { useGetAllTasksQuery } from "@store/services/tasksService";

const TasksList: React.FC = () => {
  const { tasks, isFetching } = useGetAllTasksQuery(
    {},
    {
      selectFromResult: ({ data, isFetching }) => ({
        tasks: data || [],
        isFetching,
      }),
    }
  );

if(isFetching) {
  return <h2>Laduje sie kurwa...</h2>
}

  return (
    <div className="accordion" id="accordionExample">
      {tasks.map((task: ITaskProps) => (
        <Task
          key={task._id}
          _id={task._id}
          title={task.title}
          description={task.description}
          done={task.done}
        />
      ))}
    </div>
  );
};

export default TasksList;
