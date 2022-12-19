import { Dispatch } from "react";
import { ToDoType } from "../../../Screens/Tasks/ToDo";

export type filterTypes = {
  setIsInProcess: Dispatch<boolean>;
  isInProces: boolean;
  setIsLoading: Dispatch<boolean>;
  setToDoArr: Dispatch<ToDoType[]>;
};
