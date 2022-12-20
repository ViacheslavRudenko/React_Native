import React, { useEffect, useState } from "react";
import { Alert, Button, View } from "react-native";
import { getUsers } from "../../api/getUsers";
import LoadingPage from "../../Components/Loading/Loading";
import UserList from "../../Components/User/UserList";
import { userPropsType, usersType } from "./types";

const Users = (props: userPropsType) => {
  const [users, setUsers] = useState<usersType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUsersList = () => {
    getUsers()
      .then((res) => {
        setUsers(res.data.filter((data: any) => data));
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <View>
      <View>
        <Button
          title="Show all tasts"
          color="grey"
          onPress={() => props.navigation.navigate("Tasks", {})}
        />
      </View>
      <UserList
        users={users}
        isLoading={isLoading}
        getUsersList={getUsersList}
        navigation={props.navigation}
      />
    </View>
  );
};

export default Users;
