import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { filterBtnTypes } from "./types";

const FilterBtn = (props: filterBtnTypes) => (
  <Pressable
    onPress={() => {
      props.setIsInProcess(props.text !== "Done" ? true : false);
    }}
    style={props.isInProces && styles.activeBtn}
  >
    <Text style={styles.text}>{props.text}</Text>
  </Pressable>
);

export default FilterBtn;

const styles = StyleSheet.create({
  activeBtn: {
    borderColor: "grey",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "700",
  },
});
