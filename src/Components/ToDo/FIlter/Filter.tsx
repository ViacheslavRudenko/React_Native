import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { filterTypes } from "./types";

const Filter = (props: filterTypes) => {
  return (
    <View style={styles.box}>
      <Pressable
        onPress={() => {
          props.setIsInProcess(true);
          props.setToDoArr([]);
          props.setIsLoading(true);
        }}
        style={props.isInProces && styles.activeBtn}
      >
        <Text style={styles.text}>In process</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          props.setIsInProcess(false);
          props.setToDoArr([]);
          props.setIsLoading(true);
        }}
        style={!props.isInProces && styles.activeBtn}
      >
        <Text style={styles.text}>Done</Text>
      </Pressable>
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
  activeBtn: {
    borderColor: "grey",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "700",
  },
});
