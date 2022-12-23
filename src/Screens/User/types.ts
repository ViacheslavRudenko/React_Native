import { NavigationProp, ParamListBase } from "@react-navigation/native";

export type usersType = {
  avatar: string;
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  companyName: string;
  companyPosition: string;
};

export type userPropsType = {
  navigation: NavigationProp<ParamListBase>;
};
