import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { InvestModal } from "../InvestModal";

export const AppBets = (props, { setModal }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={setModal(true)}
        activeOpacity={0.7}
        style={styles.mainContainer}
      >
        {props.children}
      </TouchableOpacity>
    </View>
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
