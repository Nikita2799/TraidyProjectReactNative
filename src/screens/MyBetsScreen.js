import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text, Alert } from "react-native";
import { MainHeader } from "../component/MainHeader";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MyBets } from "../component/MyBets";
import axios from "axios";
import { getLocalData } from "../api/getLoacalData";

export const MyBetsScreen = ({ navigation }) => {
  const url = "http://traidy-game.com/users/getInvestData";
  const [myBets, setMyBet] = useState();
  const getBets = () => {
    getLocalData().then((trId) => {
      if (trId !== null) {
        axios
          .post(url, {
            trId: trId,
          })
          .then(({ data }) => {
            // console.log(data);
            //console.log(data);
            setMyBet(data.data);
            return;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  getBets();
  const updateHandler = () => {
    getBets();
  };
  //setTimeout(getBets, 5000);
  const deleteOne = (data) => {
    Alert.alert(
      "Are you sure?",
      "Delete one",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            getLocalData().then((trId) => {
              console.log(data);
              if (trId !== null) {
                axios
                  .post("http://traidy-game.com/users/sellOne", {
                    trId: trId,
                    id: data.id,
                    invested: data.invested,
                    rate: data.sellPrice,
                  })
                  .then((responce) => {
                    console.log(responce);
                    if (responce.data.status === "success") {
                      setMyBet(myBets.filter((bet) => bet.id !== data.id));
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }),
        },
      ],
      { cancelable: false }
    );
  };
  const deleteAll = () => {
    Alert.alert(
      "Are you sure?",
      "Delete all",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            getLocalData().then((trId) => {
              if (trId !== null) {
                axios
                  .post("http://traidy-game.com/users/sellAll", {
                    trId: trId,
                  })
                  .then((responce) => {
                    if (responce.data.status === "success") setMyBet();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={styles.img}
    >
      <MainHeader />

      <View style={styles.deleteAllBlock}>
        <Text
          style={{
            color: "#FFFF",
            fontFamily: "open-bold",
            fontSize: 20,
            fontStyle: "normal",
          }}
        >
          In play
        </Text>
        <TouchableOpacity onPress={deleteAll} style={styles.delAllButton}>
          <Text
            style={{
              color: "#0063E0",
              fontSize: 14,
              fontFamily: "open-bold",
            }}
          >
            Sell All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={myBets}
        renderItem={({ item }) => (
          <MyBets data={item} deleteOne={() => deleteOne(item)} />
        )}
      />
      <View style={styles.updateContainer}>
        <TouchableOpacity style={styles.buttonUpdate} onPress={updateHandler}>
          <Text style={styles.colorUpdate}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  updateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  colorUpdate: {
    color: "#fff",
    fontSize: 16,
    //width: "20%",
  },
  buttonUpdate: {
    marginTop: 10,
    backgroundColor: "#0063E0",
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 5,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  deleteAllBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    alignItems: "center",
  },
  delAllButton: {
    backgroundColor: "#FFFF",
    borderRadius: 10,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
