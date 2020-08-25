import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, ImageBackground } from "react-native";
import { MainHeader } from "./MainHeader";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { getLocalData } from "../api/getLoacalData";
import axios from "axios";

import { NavigationActions, StackActions } from "react-navigation";

export const InvestModal = ({ navigation, visible, data, onBack }) => {
  const [invest, setInvest] = useState({
    invest: "",
  });
  const [receive, setReceive] = useState();
  const postInvest = () => {
    getLocalData()
      .then((trId) => {
        axios
          .post("http://traidy-game.com/users/setInvest", {
            trId: trId,
            name: data.name,
            amount: invest.invest,
            rate: "5",
          })
          .then((responce) => {
            navigation.navigate("Bets");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <ImageBackground
        source={require("../../assets/img/bg.png")}
        style={styles.img}
      >
        <MainHeader />
        <Text style={styles.textName}>{data.name}</Text>
        <Text style={styles.textInput}>Invest</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(text) => setInvest({ invest: text })}
          />
        </View>
        <Text style={styles.textInput}>Receive</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(text) => setReceive(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={postInvest} style={styles.button}>
            <Text style={{ color: "#FFFF", fontFamily: "open-regular" }}>
              Invest
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
  textName: {
    color: "#FFFF",
    fontSize: 30,
    fontFamily: "open-regular",
    marginTop: 20,
    marginLeft: 20,
  },
  inputContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputs: {
    backgroundColor: "#243D61",
    width: "90%",
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "#FFFF",
    borderRadius: 5,
    color: "#FFFF",
    paddingLeft: 10,
  },
  textInput: {
    marginHorizontal: 20,
    color: "#FFFF",
    fontFamily: "open-light",
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
