import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

const ToDoListItem = (props: any) => {
  const chnageStatusToDo = () => {
    const { id, title, isDone } = props.item;
    props.setToDoArr((prev: any) => [
      ...prev.filter((toDo: any) => toDo.id !== props.item.id),
      {
        id,
        title,
        isDone: !isDone,
      },
    ]);
  };

  return (
    <View style={styles.listItemBox}>
      <TouchableOpacity
        style={styles.listItemContent}
        onLongPress={chnageStatusToDo}
      >
        <Text
          style={
            !props.item.isDone ? styles.listItemText : styles.listItemTextDone
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
