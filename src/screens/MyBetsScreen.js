import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { MainHeader } from "../component/MainHeader";
import { FlatList } from "react-native-gesture-handler";
import { MyBets } from "../component/MyBets";
export const MyBetsScreen = () => {
  const [myBets, setMyBet] = useState([
    { id: "1", name: "EUR", invest: "10000", currnetValue: "11000" },
    { id: "2", name: "BTC", invest: "6000", currnetValue: "5500" },
    { id: "3", name: "RUB", invest: "7000", currnetValue: "7100" },
    { id: "4", name: "JPY", invest: "8000", currnetValue: "8500" },
  ]);
  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={styles.img}
    >
      <MainHeader />
      <Text
        style={{
          color: "#FFFF",
          fontFamily: "open-light",
          fontSize: 20,
          fontWeight: "900",
        }}
      >
        In play
      </Text>
      <View style={styles.listItem}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myBets}
          renderItem={({ item }) => <MyBets data={item} />}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  listItem: {
    width: "100%",
    height: "70%",
    flexDirection: "column",
    marginTop: 30,
  },
});
