import React from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { ToDoType } from "../ToDo";
import { propsType } from "./types";

const ToDoList = (props: propsType) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={props.dataArr}
      renderItem={({ item }: ListRenderItemInfo<ToDoType>) => (
        <Text>{item.title}</Text>
      )}
    />
  );
};

export default ToDoList;
