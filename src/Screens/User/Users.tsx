import React, { useEffect, useState } from "react";
import { Alert, Button, View } from "react-native";
import { useSelector } from "react-redux";
import { getUsers } from "../../api/getUsers";
import LoadingPage from "../../Components/Loading/Loading";
import UserList from "../../Components/User/UserList";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/root-reducer";
import { userPropsType, usersType } from "./types";

const Users = (props: userPropsType) => {
  const [users, setUsers] = useState<usersType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { axiosUsersData } = useActions();
  const { data, loading, err } = useSelector((state: RootState) => state.Users);

  useEffect(() => {
    axiosUsersData();
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <View style={{ height: "100%" }}>
      <View>
        <Button
          title="Show all tasts"
          color="grey"
          onPress={() => props.navigation.navigate("Tasks", {})}
        />
      </View>
      <UserList
        users={data}
        isLoading={loading}
        // getUsersList={getUsersList}
        navigation={props.navigation}
      />
    </View>
  );
};

export default Users;
