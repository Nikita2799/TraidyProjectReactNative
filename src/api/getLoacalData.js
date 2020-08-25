import React from "react";
import { AsyncStorage } from "react-native";
export async function getLocalData() {
  try {
    let trId = await AsyncStorage.getItem("trId");
    return trId;
  } catch (error) {
    console.log(error);
  }
}
