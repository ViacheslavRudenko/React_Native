import { ToDoType } from "../../../Screens/Tasks/types";

export type propsType = {
  userId: string | number;
  navigation: any;
};

export type propsItemType = {
  item: ToDoType;
  userId: string | number;
  navigation: any;
};
