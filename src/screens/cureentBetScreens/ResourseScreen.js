import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../component/MainHeader";
import { ResourseBets } from "../../component/bets/ResourseBets";
export const ResourseScreen = () => {
  const [resourse, setResourse] = useState([
    { id: "1", name: "Gold" },
    { id: "0", name: "Silver" },
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
        data={resourse}
        renderItem={({ item }) => <ResourseBets data={item} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 2,
  },
  scrollView: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
