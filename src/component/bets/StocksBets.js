import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { InvestModal } from "../InvestModal";

export const StocksBets = ({ navigation, data }) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <InvestModal
        data={data}
        navigation={navigation}
        visible={modal}
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
