import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = ({ navigation }) => {
  const url = "http://traidy-game.com/users/registerUser";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("dsad");

  const postData = () => {
    console.log(login.login);
    console.log(password.password);

    const data = {
      login: login.login,
      password: password.password,
      username: "Nik",
    };
    const str = JSON.stringify(data);

    console.log(str);

    axios
      .post(url, {
        login: login.login,
        password: password.password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    /*try {
      let d = [
        ["login", login],
        ["password", password],
        ["username", "sdasdas"],
      ];

      const responce = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(d),
      });
      let data = await responce.json();
      console.log(data);

      //if (data.success === 1) {
      //  setLoginData("");
      //}
    } catch (e) {
      console.log(e.toString());
    }
    // const data =  responce.json()
    // Alert.alert(data)
    */
  };

  const onBackHandler = () => {
    navigation.navigate("Main");
  };
  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={styles.img}
    >
      <TouchableOpacity style={styles.cross} onPress={onBackHandler}>
        <Entypo size={24} name="cross" color="#FFFF" />
      </TouchableOpacity>

      <View style={styles.headerBox}>
        <Text style={styles.textWelcome}>Sign up,</Text>
        <Text style={styles.textSign}>Sign up to start</Text>
      </View>
      <View style={styles.inputs}>
        <Text
          style={{
            color: "#FFFF",
            fontFamily: "open-light",
            fontSize: 15,
            marginRight: "76%",
            marginBottom: 10,
          }}
        >
          Login
        </Text>
        <TextInput
          autoCorrect={false}
          onChangeText={(t) => setLogin({ login: t })}
          style={styles.input}
        />
        <Text
          style={{
            color: "#FFFF",
            fontFamily: "open-light",
            fontSize: 15,
            marginRight: "70%",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Password
        </Text>
        <TextInput
          autoCorrect={false}
          onChangeText={(t) => setPassword({ password: t })}
          style={styles.input}
        />
      </View>
      <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <TouchableOpacity onPress={postData} style={styles.button}>
          <Text style={{ color: "#FFFF" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerBox: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: "20%",
    justifyContent: "flex-end",
  },
  textWelcome: {
    color: "#ffff",
    fontSize: 36,
    fontFamily: "open-light",
  },
  textSign: {
    color: "#9C9C9C",
    fontSize: 23,
    fontFamily: "open-light",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: "13%",
    borderWidth: 1,
    borderColor: "#9C9C9C",
    borderRadius: 5,
    backgroundColor: "#243D61",
    marginBottom: 0,
    paddingLeft: 20,
    color: "#FFFF",
    fontFamily: "open-light",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "20%",
    borderRadius: 5,
    backgroundColor: "#0063E0",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerBox: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: "20%",
    justifyContent: "flex-end",
  },
  textWelcome: {
    color: "#ffff",
    fontSize: 36,
    fontFamily: "open-light",
  },
  textSign: {
    color: "#9C9C9C",
    fontSize: 23,
    fontFamily: "open-light",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: "13%",
    borderWidth: 1,
    borderColor: "#9C9C9C",
    borderRadius: 5,
    backgroundColor: "#243D61",
    marginBottom: 0,
    paddingLeft: 20,
    color: "#FFFF",
    fontFamily: "open-light",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "20%",
    borderRadius: 5,
    backgroundColor: "#0063E0",
  },
  cross: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 30,
  },
});
