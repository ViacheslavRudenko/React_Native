import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Components/Navbar/Navbar";
import AddToDo from "./src/Components/ToDo/Input/ToDa";
import { ToDoTitleType, ToDoType } from "./src/Types/ToDo";
import ToDoList from "./src/Components/ToDo/List/ToDoList";

export default function App() {
  const [toDoArr, setToDoArr] = useState<ToDoType[] | []>([]);

  const addToDo = (title: ToDoTitleType): void => {
    const newData: ToDoType = {
      id: Date.now().toString(),
      title,
    };

    setToDoArr([...toDoArr, newData]);
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddToDo onSubmit={addToDo} />
        <ToDoList dataArr={toDoArr} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
