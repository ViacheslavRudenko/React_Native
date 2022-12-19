import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/Components/Navbar/Navbar";
import ToDoBlock from "./src/Screens/Home/Home";

export default function App() {
  return (
    <View>
      <Navbar />
      <ToDoBlock />
    </View>
  );
}
