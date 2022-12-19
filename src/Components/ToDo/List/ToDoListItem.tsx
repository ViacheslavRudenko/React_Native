import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

const ToDoListItem = (props: any) => {
  const chnageStatusToDo = () => {
    const { id, title, isDone } = props.item;
    const newData = {
      id,
      title,
      isDone: !isDone,
    };

    props.setToDoArr((prev: any) => {
      const newArrData = prev.filter((toDo: any) => toDo.id !== id);
      !isDone ? newArrData.push(newData) : newArrData.unshift(newData);
      return newArrData;
    });
  };

  return (
    <View style={styles.listItemBox}>
      <TouchableOpacity
        style={styles.listItemContent}
        onLongPress={chnageStatusToDo}
      >
        <Text
          style={
            props.item.isDone ? styles.listItemTextDone : styles.listItemText
          }
        >
          {props.item.title}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => props.onRemove(props.item.id)} />
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
    width: "70%",
    padding: 10,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    textDecorationLine: "none",
  },
});
