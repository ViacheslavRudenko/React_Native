import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { propsType } from "./types";

const AddToDo = (props: propsType) => {
  const [inputValue, setInputValue] = useState("");

  const pressHandler = () => {
    if (inputValue.trim()) {
      props.onSubmit(inputValue.trim());
      setInputValue("");
    } else {
      Alert.alert("Your task is empty, write sth to add!");
    }
  };

  const cleanInput = () => setInputValue("");

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={"Add your new task"}
        autoCorrect={false}
        autoCapitalize={"none"}
      />
      <Button title="Add" onPress={pressHandler} />
      <Button title="Clean" onPress={cleanInput} />
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
});
