declare module "task-types" {
  export interface ITaskProps {
    _id: number;
    title: string;
    description: string;
    done: boolean;
  }

  interface IModalAddProps {
    isAddEmployeeModalOpen: Boolean;
    toggleAddEmployeeModal: () => void;
  }

  interface IModalAddTaksProps {
    title: string;
    description: string;
  }
}
