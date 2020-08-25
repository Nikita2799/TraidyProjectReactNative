import { AsyncStorage } from "react-native";
export async function setLocalData(trId) {
  try {
    await AsyncStorage.setItem("trId", trId);
    //let trId = responce.traidy_id
    // if(trId!==undefined){
    //  await AsyncStorage.setItem("name", responce.name);
    // }else{

    //}
  } catch (error) {
    console.log(error);
  }
}
