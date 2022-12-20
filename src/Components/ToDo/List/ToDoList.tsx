import React, { useState, useRef } from "react";
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ToDoType } from "../../../Screens/Tasks/types";
import ToDoListItem from "./ToDoListItem";
import { propsType } from "./types";

const ToDoList = (props: propsType) => {
  const [isShowBtnTop, setIsShowBtnTop] = useState(false);
  const scrollRef: any = useRef();

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
          <RefreshControl
            refreshing={props.isLoading}
            onRefresh={props.getToDoList}
          />
        }
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        data={props.dataArr}
        onScroll={handleScroll}
        renderItem={({ item }: ListRenderItemInfo<ToDoType>) => (
          <ToDoListItem
            item={item}
            onRemove={props.onRemove}
            setToDoArr={props.setToDoArr}
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
      {/* <View style={isShowBtnTop ? styles.btnTop : styles.btnTopNone}>
        <Button title={"Top"} onPress={onPressTouch} />
      </View> */}
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
