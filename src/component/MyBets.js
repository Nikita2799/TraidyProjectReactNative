import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { CurrentBetModal } from "./CurrentBetModal";

export const MyBets = ({ data, deleteOne }) => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <CurrentBetModal
        onBack={() => setModal(false)}
        visible={modal}
        data={data}
      />
      <TouchableOpacity
        onPress={() => setModal(true)}
        onLongPress={() => deleteOne(data)}
        style={styles.button}
      >
        <Text style={{ fontFamily: "open-bold" }}>{data.nameInvest}</Text>
        <Text>{data.sellPrice}</Text>
        <Image
          style={styles.img}
          source={require("../../assets/img/ellipse-bets.png")}
        />
        <Image
          style={styles.imgBottom}
          source={require("../../assets/img/ellipse-bets-bottom.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    left: 307,
    bottom: 18,
    borderTopRightRadius: 10,
  },
  imgBottom: {
    position: "absolute",
    left: 307,
    top: 20,
    borderBottomRightRadius: 10,
  },
  button: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#FFFF",
    borderRadius: 10,
    marginHorizontal: 18,
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
