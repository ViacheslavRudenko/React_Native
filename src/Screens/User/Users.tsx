import React, { useEffect } from "react";
import { Alert, Button, View } from "react-native";
import { useSelector } from "react-redux";
import LoadingPage from "../../Components/Loading/Loading";
import UserList from "../../Components/User/UserList";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/root-reducer";
import { userPropsType } from "./types";

const Users = (props: userPropsType) => {
  const { axiosUsersData } = useActions();
  const { data, loading, err } = useSelector((state: RootState) => state.Users);

  useEffect(() => {
    axiosUsersData();
    err && Alert.alert("Error", err);
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <View style={{ height: "100%" }}>
      <View>
        <Button
          title="Show all tasks"
          color="grey"
          onPress={() => props.navigation.navigate("Tasks", {})}
        />
      </View>
      <UserList
        users={data}
        isLoading={loading}
        navigation={props.navigation}
      />
    </View>
  );
};

export default Users;
