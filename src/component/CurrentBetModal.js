import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MainHeader } from "./MainHeader";
import { getLocalData } from "../api/getLoacalData";
import axios from "axios";

export const CurrentBetModal = ({ visible, data, onBack }) => {
  const deleteHandler = () => {
    getLocalData().then((trId) => {
      if (trId !== null) {
        let url = "http://traidy-game.com/users/sellOne";
        axios
          .post(url, {
            trId: trId,
            id: data.id,
            invested: data.invested,
            rate: data.sellPrice,
          })
          .then(({ res }) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <Modal visible={visible}>
      <ImageBackground
        source={require("../../assets/img/bg.png")}
        style={styles.img}
      >
        <MainHeader />
        <Text
          style={{
            color: "#FFFF",
            marginHorizontal: 20,
            marginTop: 10,
            fontFamily: "open-regular",
            fontSize: 35,
          }}
        >
          Information
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Investment#: {data.id}</Text>
          <Text style={styles.text}>Asset: {data.nameInvest}</Text>
          <Text style={styles.text}>Invested: {data.invested}</Text>
          <Text style={styles.text}>Current Rate: {data.sellPrice}</Text>
          <Text style={styles.text}>Profit: </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={deleteHandler}>
            <Text style={{ color: "#FFFF", fontFamily: "open-regular" }}>
              Sell bet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onBack} style={styles.button}>
            <Text style={{ color: "#FFFF", fontFamily: "open-regular" }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    color: "#FFFF",
    marginTop: 10,
    fontFamily: "open-regular",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 35,
    backgroundColor: "#0062DE",
    borderRadius: 5,
  },
});
