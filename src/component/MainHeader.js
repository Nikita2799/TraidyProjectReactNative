import React, { useState, useEffect } from "react";
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

import { getLocalData } from "../api/getLoacalData";
import { setLocalData } from "../api/setLocalData";
import numbro from "numbro";

export const MainHeader = () => {
  const [balance, setBalance] = useState();
  //const [capitalStr, setCapitalStr] = useState();

  //  const [lastCapital, setLastCapital] = useState();
  const [capitalization, setCapitalization] = useState({
    capital: 0,
    lastCapital: 0,
    capitalStr: "",
  });

  const url = "http://traidy-game.com/users/getUserData";

  useEffect(() => {
    console.log("request 1");
    getLocalData().then((trId) => {
      if (trId === null) {
        return;
      }

      axios
        .post(url, {
          trId: trId,
        })
        .then((response) => {
          console.log(response.data.capitalizationLast);
          setBalance(
            numbro(response.data.amount).format({
              thousandSeparated: true,
              mantissa: 2,
            })
          );
          setCapitalization({
            lastCapital: response.data.capitalizationLast,
          });
        })
        .then(() => {
          return axios.post("http://traidy-game.com/users/getCapital", {
            trId: trId,
          });
        })
        .then((response) => {
          //console.log(Number(response.data.data));
          setCapitalization({
            capital: Number(response.data.data),
            capitalStr: numbro(response.data.data).format({
              mantissa: 2,
              thousandSeparated: true,
            }),
          });

          //console.log(response.data.data);
          console.log(capitalization.lastCapital);
          //console.log(capitalization.capital);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [balance]);

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
          <Text style={{ color: "#0063E0" }}> TR</Text>
        </Text>
      </View>
      <View style={styles.capital}>
        <Text
          style={{
            fontSize: 17,
            color: "#1ED760",
          }}
        >
          {capitalization.capitalStr}
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
