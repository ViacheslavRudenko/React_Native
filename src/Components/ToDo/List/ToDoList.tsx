import React from "react";
import { Text, View } from "react-native";
import { propsType } from "./types";

const ToDoList = (props: propsType) => {
  return (
    <View>
      {props.dataArr.map((toDo: any) => {
        return <Text key={toDo.id}>{toDo.title}</Text>;
      })}
    </View>
  );
};

export default ToDoList;
