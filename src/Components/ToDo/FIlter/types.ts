import { Dispatch } from "react";
import { ToDoType } from "../../../Screens/Tasks/types";

export type filterTypes = {
  setIsInProcess: Dispatch<boolean>;
  isInProces: boolean;
};

export type filterBtnTypes = {
  setIsInProcess: Dispatch<boolean>;
  isInProces: boolean;
  text: string;
};
