import React, { useEffect } from "react";
import { Alert, View } from "react-native";
import { useSelector } from "react-redux";
import LoadingPage from "../../Components/Loading/Loading";
import UserList from "../../Components/User/UserList";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/root-reducer";
import { userPropsType } from "./types";

const Users = (props: userPropsType) => {
  const { axiosUsersData } = useActions();
  const { loading, err } = useSelector((state: RootState) => state.Users);

  useEffect(() => {
    axiosUsersData();
    err && Alert.alert("Error", err);
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <View style={{ height: "100%" }}>
      <UserList navigation={props.navigation} />
    </View>
  );
};

export default Users;
