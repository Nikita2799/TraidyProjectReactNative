import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../component/MainHeader";
import { ResourseBets } from "../../component/bets/ResourseBets";
export const ResourseScreen = ({ navigation }) => {
  const [resourse, setResourse] = useState([
    { id: "1", name: "Gold", rate: "5" },
    { id: "0", name: "Silver", rate: "5" },
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
        renderItem={({ item }) => (
          <ResourseBets navigation={navigation} data={item} />
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
