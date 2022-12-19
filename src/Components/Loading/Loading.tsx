import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingPage = () => {
  return (
    <View style={styles.lodaingContainer}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  lodaingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
});
