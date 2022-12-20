import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tasks from "./Tasks/Tasks";
import Users from "./User/Users";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={Users}
          options={{ title: "Users" }}
        />
        <Stack.Screen
          name={"Tasks"}
          component={Tasks}
          options={{ title: "Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
