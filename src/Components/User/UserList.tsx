import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";

import { usersType } from "../../Screens/User/types";
import { userListPropsType } from "./types";
import UserListItem from "./UserListItem";

const UserList = (props: userListPropsType) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.isLoading}
          onRefresh={props.getUsersList}
        />
      }
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={props.users}
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
