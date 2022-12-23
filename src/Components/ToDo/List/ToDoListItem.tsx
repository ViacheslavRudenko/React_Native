import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { useActions } from "../../../hooks/useActions";
import { propsItemType } from "./types";

const ToDoListItem = (props: propsItemType) => {
  const { editTaskData, deleteOneTask } = useActions();

  const chnageStatusToDo = () => {
    const newData = {
      ...props.item,
      completed: !props.item.completed,
    };

    editTaskData(props.item.userId, props.item.id, newData);
  };

  const confirmDelete = () => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task?",
      [
        {
          text: "Yes",
          onPress: () => {
            deleteOneTask(props.item.userId, props.item.id);
          },
        },

        {
          text: "No",
        },
      ]
    );
  };

  const showUserTasks = () => {
    props.navigation.navigate("Tasks", {
      id: props.item.userId,
      userName: props.item.username,
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
            props.item.completed ? styles.listItemTextDone : styles.listItemText
          }
        >
          {props.item.title}
        </Text>
      </TouchableOpacity>
      <Pressable style={styles.btnDelBox} onPress={confirmDelete}>
        <Text style={styles.btnDel}>X</Text>
      </Pressable>
    </View>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({
  listItemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  listItemText: { textDecorationLine: "none" },
  listItemTextDone: { textDecorationLine: "line-through" },
  listItemContent: {
    width: "90%",
    padding: 10,
    marginTop: 5,
    textDecorationLine: "none",
  },
  btnDelBox: {
    width: 30,
  },
  btnDel: {
    fontSize: 20,
    fontWeight: "700",
  },
  btnUserName: {
    textAlign: "center",
    width: "100%",
  },
  btnUserNameText: {
    textAlign: "right",
  },
});
