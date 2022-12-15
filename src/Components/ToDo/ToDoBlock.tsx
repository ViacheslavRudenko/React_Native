import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AddToDo from "./Input/ToDa";
import ToDoList from "./List/ToDoList";
import { ToDoTitleType, ToDoType } from "./ToDo";

const ToDoBlock = () => {
  const [toDoArr, setToDoArr] = useState<ToDoType[] | []>([]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
    };

    setToDoArr([...toDoArr, newData]);
  };
  return (
    <View style={styles.container}>
      <AddToDo onSubmit={addToDo} />
      <ToDoList dataArr={toDoArr} />
    </View>
  );
};

export default ToDoBlock;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
