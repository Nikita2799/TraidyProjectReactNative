import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { getLocalData } from "../api/getLoacalData";
import { setLocalData } from "../api/setLocalData";
import numbro from "numbro";

export const MainHeader = () => {
  const [balance, setBalance] = useState();
  const [capitalization, setCapitalization] = useState({
    capital: "#000",
    lastCapital: "5000",
    capitalStr: "",
  });
  const url = "http://traidy-game.com/users/getUserData";

  useEffect(() => {
    getLocalData().then((trId) => {
      if (trId === null) {
        return;
      }

      axios
        .post(url, {
          trId: trId,
        })
        .then((response) => {
          setBalance(
            numbro(response.data.amount).format({
              thousandSeparated: true,
              mantissa: 2,
            })
          );
          setCapitalization((prev) => ({
            ...prev,
            lastCapital: response.data.capitalizationLast,
          }));
        })
        .then(() => {
          return axios.post("http://traidy-game.com/users/getCapital", {
            trId: trId,
          });
        })
        .then((response) => {
          //console.log(Number(response.data.data));
          setCapitalization((prev) => ({
            ...prev,
            capitalStr: numbro(response.data.data).format({
              mantissa: 2,
              thousandSeparated: true,
            }),
          }));

          //console.log(capitalization.capital);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [balance]);
  const updateHandler = () => {
    getLocalData().then((trId) => {
      if (trId === null) {
        return;
      }

      axios
        .post(url, {
          trId: trId,
        })
        .then((response) => {
          setBalance(
            numbro(response.data.amount).format({
              thousandSeparated: true,
              mantissa: 2,
            })
          );
          setCapitalization((prev) => ({
            ...prev,
            lastCapital: response.data.capitalizationLast,
          }));
        })
        .then(() => {
          return axios.post("http://traidy-game.com/users/getCapital", {
            trId: trId,
          });
        })
        .then((response) => {
          let capital = Number(capitalization.lastCapital);
          let capitalLast = Number(response.data.data);
          console.log(capital, capitalLast);
          if (capital > capitalLast) {
            setCapitalization((prev) => ({
              ...prev,
              capital: "red",
            }));
          } else if (capital < capitalLast) {
            setCapitalization((prev) => ({
              ...prev,
              capital: "green",
            }));
          } else if (capital == capitalLast) {
            setCapitalization((prev) => ({
              ...prev,
              capital: "#000",
            }));
          }
          setCapitalization((prev) => ({
            ...prev,
            capitalStr: numbro(response.data.data).format({
              mantissa: 2,
              thousandSeparated: true,
            }),
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

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
        <Text>Amount to invest</Text>
        <Text style={{ fontWeight: "600", fontSize: 25 }}>
          {balance}
          <Text style={{ color: "#0063E0" }}> TR</Text>
        </Text>
      </View>
      <View style={styles.capital}>
        <Text>Capitalization</Text>
        <Text
          style={{
            fontSize: 17,
            color: capitalization.capital,
          }}
        >
          {capitalization.capitalStr}
          <Text style={{ color: "#0063E0" }}> TR</Text>
        </Text>
        <TouchableOpacity style={styles.buttonUpdate} onPress={updateHandler}>
          <Text style={styles.colorUpdate}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorUpdate: {
    color: "#fff",
    fontSize: 16,
  },
  buttonUpdate: {
    marginTop: 10,
    backgroundColor: "#0063E0",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  header: {
    backgroundColor: "#FFFF",
    height: Dimensions.get("window").width > 375 ? "28%" : "35%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: Dimensions.get("window").width > 375 ? 15 : 2,
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
