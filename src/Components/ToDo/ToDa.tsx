import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { propsType } from "./types";

const AddToDo = (props: propsType) => {
  const pressHandler = () => {
    props.onSubmit("newData");
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="+" onPress={pressHandler} />
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
});
