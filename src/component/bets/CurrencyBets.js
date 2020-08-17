import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppBets } from "../ui/AppBets";
import { FontAwesome5 } from "@expo/vector-icons";
export const CurrencyBets = ({ data }) => {
  return (
    <AppBets>
      <FontAwesome5 name={data.iconsName} size={24} color="black" />
      <Text style={styles.textName}>{data.name}</Text>
      <Text>Touch to bet</Text>
    </AppBets>
  );
};
const styles = StyleSheet.create({
  textName: {
    fontFamily: "open-light",
  },
});
