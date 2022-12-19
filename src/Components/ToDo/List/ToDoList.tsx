import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { ToDoType } from "../ToDo";
import ToDoListItem from "./ToDoListItem";
import { propsType } from "./types";

const ToDoList = (props: propsType) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.isLoading}
          onRefresh={props.getToDoList}
        />
      }
      style={styles.list}
      keyExtractor={(item) => item.id.toString()}
      data={props.dataArr}
      renderItem={({ item }: ListRenderItemInfo<ToDoType>) => (
        <ToDoListItem
          item={item}
          onRemove={props.onRemove}
          setToDoArr={props.setToDoArr}
        />
      )}
    />
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  list: { height: "100%" },
});
