import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../component/MainHeader";
import { CurrencyBets } from "../../component/bets/CurrencyBets";
export const CurrencyScreen = ({ navigation }) => {
  const [currency, setCurrency] = useState([
    { id: "1", name: "EUR", iconsName: "euro-sign" },
    { id: "0", name: "RUB", iconsName: "ruble-sign" },
    { id: "2", name: "UAN", iconsName: "dollar-sign" },
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
        data={currency}
        renderItem={({ item }) => (
          <CurrencyBets navigation={navigation} data={item} />
        )}
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
