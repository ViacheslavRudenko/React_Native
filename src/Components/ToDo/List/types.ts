import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ToDoType } from "../../../Screens/Tasks/types";

export type propsType = {
  userId: string | number;
  navigation: NavigationProp<ParamListBase>;
  completed: boolean;
};

export type propsItemType = {
  item: ToDoType;
  userId: string | number;
  navigation: NavigationProp<ParamListBase>;
};
