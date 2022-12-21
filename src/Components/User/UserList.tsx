import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { usersType } from "../../Screens/User/types";
import { RootState } from "../../store/root-reducer";
import { userListPropsType } from "./types";
import UserListItem from "./UserListItem";

const UserList = (props: userListPropsType) => {
  const { data, loading } = useSelector((state: RootState) => state.Users);
  const { axiosUsersData } = useActions();
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={axiosUsersData} />
      }
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({ item }: ListRenderItemInfo<usersType>) => (
        <UserListItem item={item} navigation={props.navigation} />
      )}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
});
