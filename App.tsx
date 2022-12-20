import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { Navigation } from "./src/Screens/Navigation";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
