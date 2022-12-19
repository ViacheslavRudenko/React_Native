import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { filterTypes } from "./types";

const Filter = (props: filterTypes) => {
  return (
    <View style={styles.box}>
      <View style={props.isInProces && styles.activeBtn}>
        <Button
          title="In process"
          onPress={() => {
            props.setIsInProcess(true);
            props.setToDoArr([]);
            props.setIsLoading(true);
          }}
        />
      </View>
      <View style={!props.isInProces && styles.activeBtn}>
        <Button
          title="Done"
          onPress={() => {
            props.setIsInProcess(false);
            props.setToDoArr([]);
            props.setIsLoading(true);
          }}
        />
      </View>
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
});
