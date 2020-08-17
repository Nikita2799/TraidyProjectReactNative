import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../component/MainHeader";
import { CryptoBets } from "../../component/bets/CrypyoBets";

export const CryptoScreen = () => {
  const [crypto, setCrypto] = useState([
    { id: "1", name: "Bitcoin", iconsName: "bitcoin" },
    { id: "0", name: "Ethereum", iconsName: "ethereum" },
  ]);
  const [modal, setModal] = useState(false);
  return (
    <ImageBackground
      source={require("../../../assets/img/bg.png")}
      style={styles.img}
    >
      <MainHeader />
      <FlatList
        style={styles.scrollView}
        keyExtractor={(item) => item.id}
        data={crypto}
        renderItem={({ item }) => <CryptoBets data={item} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
