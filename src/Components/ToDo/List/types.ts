import { Dispatch, SetStateAction } from "react";
import { ToDoIdType, ToDoType } from "../../../Screens/Home/ToDo";

export type propsType = {
  dataArr: ToDoType[];
  onRemove: (id: ToDoIdType) => void;
  setToDoArr: Dispatch<SetStateAction<ToDoType[]>>;
  isLoading: boolean;
  getToDoList: any;
};
