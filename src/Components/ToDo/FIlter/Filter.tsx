import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FilterBtn from "./FilterBtn";
import { filterTypes } from "./types";

const Filter = (props: filterTypes) => {
  return (
    <View style={styles.box}>
      <FilterBtn
        setIsInProcess={props.setIsInProcess}
        isInProces={props.isInProces}
        text={"In process"}
      />
      <FilterBtn
        setIsInProcess={props.setIsInProcess}
        isInProces={!props.isInProces}
        text={"Done"}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
