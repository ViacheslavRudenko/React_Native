import { Dispatch, SetStateAction } from "react";
import { ToDoIdType, ToDoType } from "../ToDo";

export type propsType = {
  dataArr: ToDoType[];
  onRemove: (id: ToDoIdType) => void;
  setToDoArr: Dispatch<SetStateAction<ToDoType[]>>;
};
