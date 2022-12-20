import { Dispatch } from "react";
import { ToDoType } from "../../../Screens/Tasks/types";

export type filterTypes = {
  setIsInProcess: Dispatch<boolean>;
  isInProces: boolean;
};
