import { NavigationProp, ParamListBase } from "@react-navigation/native";

export type ToDoType = {
  id: string;
  title: string;
  completed: boolean;
  userId: string | number;
};

export type ToDoTitleType = string;
export type ToDoIdType = string;

export type tasksPropsType = {
  route: any;
  navigation: NavigationProp<ParamListBase>;
};
