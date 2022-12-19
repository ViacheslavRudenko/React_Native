import { Dispatch } from "react";
import { ToDoType } from "../ToDo";

export type filterTypes = {
  setIsInProcess: Dispatch<boolean>;
  isInProces: boolean;
  setIsLoading: Dispatch<boolean>;
  setToDoArr: Dispatch<ToDoType[]>;
};
