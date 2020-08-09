import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  const url = "http://traidy-game.com/users/loginUser";

  const [login, setLogin] = useState({
    login: "",
  });
  const [password, setPassword] = useState({
    password: "",
  });

  const postData = async () => {
    try {
      let d = { login, password };
      console.log(d);
      const responce = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
  };

  const openRegScreen = () => {
    navigation.navigate("Registry");
  };

  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={styles.img}
    >
      <View style={styles.headerBox}>
        <Text style={styles.textWelcome}>Welcome,</Text>
        <Text style={styles.textSign}>Sign in to continue</Text>
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
          style={styles.input}
          value={login}
          onChangeText={(te) => setLogin({ login: te })}
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
          style={styles.input}
          value={password}
          onChangeText={(t) => setPassword({ password: t })}
        />
      </View>
      <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={postData}>
          <Text style={{ color: "#FFFF" }}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContent}>
        <Text
          style={{
            color: "#9C9C9C",
            fontFamily: "open-light",
            marginRight: 5,
          }}
        >
          Don't have account?
        </Text>
        <TouchableOpacity onPress={openRegScreen}>
          <Text style={{ color: "#0063E0", marginBottom: 2 }}>Sign up</Text>
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
  footerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 25,
    marginBottom: 20,
  },
});
