import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { getUser } from "../../../api/getUsers";
import { ToDoType } from "../../../Screens/Tasks/types";
import { propsItemType } from "./types";

const ToDoListItem = (props: propsItemType) => {
  const [userNick, setUserNick] = useState("");

  useEffect(() => {
    !props.userId &&
      getUser(props.item.userId).then((resp: any) => {
        setUserNick(resp.data.name);
      });
  }, []);

  const chnageStatusToDo = () => {
    const { id, completed } = props.item;
    const newData = {
      ...props.item,
      completed: !completed,
    };

    props.setToDoArr((prev: ToDoType[]) => {
      const newArrData = prev.filter((toDo: ToDoType) => toDo.id !== id);
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

  const showUserTasks = () => {
    props.navigation.navigate("Tasks", {
      id: props.item.userId,
      userName: userNick,
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

        {!props.userId && (
          <Pressable style={styles.btnUserName} onPress={showUserTasks}>
            <Text style={styles.btnUserNameText}>{userNick}</Text>
          </Pressable>
        )}
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
  btnUserName: {
    textAlign: "center",
    width: "100%",
  },
  btnUserNameText: {
    textAlign: "right",
  },
});
