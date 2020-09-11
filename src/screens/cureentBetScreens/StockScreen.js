import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../component/MainHeader";
import { StocksBets } from "../../component/bets/StocksBets";
export const StockScreen = ({ navigation }) => {
  const [stacks, setStacks] = useState([
    { id: "1", name: "Tesla", rate: "5" },
    { id: "0", name: "Apple", iconsName: "apple", rate: "5" },
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
        data={stacks}
        renderItem={({ item }) => (
          <StocksBets navigation={navigation} data={item} />
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
