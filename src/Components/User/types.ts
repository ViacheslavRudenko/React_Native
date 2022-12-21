import { usersType } from "../../Screens/User/types";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export type userListPropsType = {
  navigation: NavigationProp<ParamListBase>;
};

export type userListPropsItemType = {
  item: usersType;
  navigation: NavigationProp<ParamListBase>;
};
