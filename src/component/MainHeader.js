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
import axios from "axios";
export const MainHeader = () => {
  const [balance, setBalance] = useState();
  const [capital, setCapital] = useState();
  const url = "http://traidy-game.com/users/getUserData";

  const _retrieveData = async () => {
    try {
      let trId = await AsyncStorage.getItem("trId");
      console.log(trId);
      if (trId !== null) {
        axios
          .post(url, {
            trId: trId,
          })
          .then((response) => {
            //console.log(response);
            setBalance(
              Intl.NumberFormat("ru-RU", {
                maximumSignificantDigits: 3,
              }).format(response.data.amount)
            );
            setCapital(
              Intl.NumberFormat("ru-RU", {
                maximumSignificantDigits: 3,
              }).format(response.data.capitalization)
            );
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveData();

  return (
    <View style={styles.header}>
      <View style={styles.images}>
        <Image source={require("../../assets/img/ellipse-left.png")} />
        <Text
          style={{
            fontWeight: "normal",
            fontSize: 20,
            fontFamily: "open-light",
            marginTop: 20,
          }}
        >
          Wallet
        </Text>
        <Image source={require("../../assets/img/ellipse-right.png")} />
      </View>
      <View style={styles.textHeader}></View>
      <View style={styles.balance}>
        <Text style={{ fontWeight: "600", fontSize: 25 }}>
          {balance}
          <Text style={{ color: "#0063E0" }}>TR</Text>
        </Text>
      </View>
      <View style={styles.capital}>
        <Text style={{ fontSize: 17 }}>
          {capital}
          <Text style={{ color: "#0063E0" }}> TR</Text>
        </Text>
      </View>
      <View style={styles.mainContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFF",
    height: "23%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
});
