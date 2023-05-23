declare module "task-types" {
  export interface ITaskProps {
    _id: number;
    title: string;
    description: string;
    done: boolean;
    toggleDeleteEmployeeModal: () => void;
    setIdTask: React.Dispatch<React.SetStateAction<number>>;
  }

  interface IModalAddProps {
    isAddEmployeeModalOpen: Boolean;
    toggleAddEmployeeModal: () => void;
  }

  interface IModalDeleteProps {
    isDeleteEmployeeModalOpen: Boolean;
    toggleDeleteEmployeeModal: () => void;
    setIdTask: React.Dispatch<React.SetStateAction<number>>;
    idTask: number;
  }

  interface IModalAddTaksProps {
    title: string;
    description: string;
  }
}
