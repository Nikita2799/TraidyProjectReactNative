import React, { useState, version } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import { MainHeader } from "../component/MainHeader";
//import { BottomNaigation } from "../navigation/BottomNavigation";

export const BetsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/bg-bets.png")}
      style={styles.img}
    >
      <MainHeader />

      <View style={styles.blockButtonContainer}>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.textButton}>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.textButton}>Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.textButton}>Currency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.textButton}>Stocks</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFF",
    height: "23%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  blockButtonContainer: {
    marginVertical: 40,
    width: "100%",
    height: "55%",
    //backgroundColor: "#000",
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  blockButton: {
    margin: 10,
    backgroundColor: "#FFFF",
    width: "40%",
    height: "40%",
    backgroundColor: "#0063E0",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeader: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  balance: {
    marginTop: 20,
    alignItems: "center",
  },
  capital: {
    alignItems: "center",
    marginTop: 10,
  },
  mainContainer: {},
  textButton: {
    color: "#FFFF",
    fontSize: 20,
    fontFamily: "open-bold",
  },
});
