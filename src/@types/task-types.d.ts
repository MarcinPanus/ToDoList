declare module "task-types" {
  export interface ITaskProps {
    _id: number;
    title: string;
    description: string;
    done: boolean;
    toggleDeleteTaskModal: () => void;
    setIdTask: React.Dispatch<React.SetStateAction<number>>;
  }

  interface IAddTaskModalProps {
    isAddTaskModalOpen: Boolean;
    toggleAddTaskModal: () => void;
    onClearState: () => void;
    addTaskForm: {
      title: string;
      description: string;
    };
    setAddTaskForm: React.Dispatch<
      React.SetStateAction<{
        title: string;
        description: string;
      }>
    >;
    onAddTask: () => void;
  }

  interface IDeleteTaskModalProps {
    isDeleteTaskModalOpen: Boolean;
    toggleDeleteTaskModal: () => void;
    onDeleteTask: () => void;
  }

  interface IAddEditTaskModal {
    isModalOpen: Boolean;
    onHideFunc: () => void;
    onSubmit: () => void;
    taskForm: {
      title: string;
      description: string;
    };
    setTaskForm: React.Dispatch<
      React.SetStateAction<{
        title: string;
        description: string;
      }>
    >;
  }
}
