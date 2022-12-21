import React, { useState, useRef } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { ToDoType } from "../../../Screens/Tasks/types";
import { RootState } from "../../../store/root-reducer";
import ToDoListItem from "./ToDoListItem";
import { propsType } from "./types";

const ToDoList = (props: propsType) => {
  const [isShowBtnTop, setIsShowBtnTop] = useState(false);
  const scrollRef = useRef<any>();
  const { axiosData } = useActions();
  const { data, loading } = useSelector((state: RootState) => state.TasksData);

  const handleScroll = (event: any) => {
    const verticalPosition = event.nativeEvent.contentOffset.y;
    verticalPosition > 0 ? setIsShowBtnTop(true) : setIsShowBtnTop(false);
  };

  const onPressTouch = () => {
    scrollRef.current?.scrollToOffset({
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <FlatList
        ref={scrollRef}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={axiosData} />
        }
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        onScroll={handleScroll}
        renderItem={({ item }: ListRenderItemInfo<ToDoType>) => (
          <ToDoListItem
            item={item}
            userId={props.userId}
            navigation={props.navigation}
          />
        )}
      />

      <Pressable
        style={isShowBtnTop ? styles.btnTop : styles.btnTopNone}
        onPress={onPressTouch}
      >
        <Text>Top</Text>
      </Pressable>
    </>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  list: { height: "100%" },
  btnTop: {
    position: "absolute",
    bottom: "20%",
    right: 20,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.5,
    padding: 15,
  },
  btnTopNone: {
    display: "none",
  },
});
