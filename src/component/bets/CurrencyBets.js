import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { AppBets } from "../ui/AppBets";
import { FontAwesome5 } from "@expo/vector-icons";
import { InvestModal } from "../InvestModal";

export const CurrencyBets = ({ navigation, data }) => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <InvestModal
        data={data}
        visible={modal}
        navigation={navigation}
        onBack={() => setModal(false)}
      />
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => setModal(true)}
      >
        <FontAwesome5 name={data.iconsName} size={24} color="black" />
        <Text style={styles.textName}>{data.name}</Text>
        <Text>Touch to bet</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textName: {
    fontFamily: "open-light",
  },
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
