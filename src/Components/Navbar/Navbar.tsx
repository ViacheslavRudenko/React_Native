import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>My task</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "grey",
    paddingBottom: 16,
  },
  text: {
    fontSize: 24,
  },
});
