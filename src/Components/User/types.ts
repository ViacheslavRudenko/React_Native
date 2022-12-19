import { usersType } from "../../Screens/User/types";

export type userListPropsType = {
  users: usersType[];
  isLoading: boolean;
  getUsersList: () => any;
};

export type userListPropsItemType = {
  item: usersType;
};
