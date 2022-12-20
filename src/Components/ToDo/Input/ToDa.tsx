import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { Text } from "react-native-elements";
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

      <View style={styles.btnBox}>
        <Pressable onPress={pressHandler} style={styles.btnAction}>
          <Text>Add</Text>
        </Pressable>
        <Pressable onPress={cleanInput} style={styles.btnAction}>
          <Text>Clean</Text>
        </Pressable>
      </View>
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
    width: "60%",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  btnBox: { flexDirection: "row", alignSelf: "flex-end" },
  btnAction: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});
