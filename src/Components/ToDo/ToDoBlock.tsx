import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AddToDo from "./Input/ToDa";
import ToDoList from "./List/ToDoList";
import { ToDoIdType, ToDoTitleType, ToDoType } from "./ToDo";

const ToDoBlock = () => {
  const [toDoArr, setToDoArr] = useState<ToDoType[] | []>([]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
      isDone: false,
    };

    setToDoArr([...toDoArr, newData]);
  };

  const removeToDo = (id: ToDoIdType) => {
    setToDoArr((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddToDo onSubmit={addToDo} />
      <ToDoList
        dataArr={toDoArr}
        onRemove={removeToDo}
        setToDoArr={setToDoArr}
      />
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
