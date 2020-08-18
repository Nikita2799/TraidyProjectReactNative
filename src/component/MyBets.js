import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export const MyBets = ({ data }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ fontFamily: "open-bold" }}>{data.name}</Text>
      <Text>{data.currnetValue}</Text>
      <Image
        style={styles.img}
        source={require("../../assets/img/ellipse-bets.png")}
      />
      <Image
        style={styles.imgBottom}
        source={require("../../assets/img/ellipse-bets.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    left: 307,
  },
  imgBottom: {
    position: "absolute",
    left: 307,
    top: 20,
    zIndex: 500,
  },
  button: {
    position: "relative",
    width: "90%",
    height: "60%",
    flexDirection: "row",
    backgroundColor: "#FFFF",
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: "space-around",
  },
});
