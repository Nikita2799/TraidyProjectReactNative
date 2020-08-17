import React from "react";
import { Image, StyleSheet } from "react-native";

export const Icons = () => {
  return (
    <Image
      source={require("../../assets/img/bet-icon.png")}
      style={styles.img}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 20,
  },
});
