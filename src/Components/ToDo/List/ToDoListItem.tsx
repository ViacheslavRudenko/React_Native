import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { propsItemType } from "./types";

const ToDoListItem = (props: propsItemType) => {
  const chnageStatusToDo = () => {
    const { id, title, completed } = props.item;
    const newData = {
      id,
      title,
      completed: !completed,
    };

    props.setToDoArr((prev: any) => {
      console.log(prev);

      const newArrData = prev.filter((toDo: any) => toDo.id !== id);
      !completed ? newArrData.push(newData) : newArrData.unshift(newData);
      return newArrData;
    });
  };

  const confirmDelete = () => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task?",
      [
        {
          text: "Yes",
          onPress: () => {
            props.onRemove(props.item.id);
          },
        },

        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.listItemBox}>
      <TouchableOpacity
        style={styles.listItemContent}
        onLongPress={chnageStatusToDo}
      >
        <Text
          style={
            props.item.completed ? styles.listItemTextDone : styles.listItemText
          }
        >
          {props.item.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnDel}>
        <Button title="X" onPress={confirmDelete} />
      </View>
    </View>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({
  listItemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: { textDecorationLine: "none" },
  listItemTextDone: { textDecorationLine: "line-through" },
  listItemContent: {
    width: "90%",
    padding: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    textDecorationLine: "none",
  },
  btnDel: {
    paddingRight: 5,
  },
});
