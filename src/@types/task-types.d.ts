declare module "task-types" {
  export interface ITaskProps {
    _id: number;
    title: string;
    description: string;
    done: boolean;
  }

  interface IModalProps {
    show: Boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  }
}
