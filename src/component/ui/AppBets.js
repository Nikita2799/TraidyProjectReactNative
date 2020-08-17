import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const AppBets = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.mainContainer}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
  },
});
