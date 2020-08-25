import React, { useState } from "react";
import { StyleSheet, View, AsyncStorage, Image } from "react-native";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "./src/screens/LoginScreen";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { bootstrap } from "./src/bootstrap";
import { BetsScreen } from "./src/screens/BetsScreen";
import { MyBetsScreen } from "./src/screens/MyBetsScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { AuthContext } from "./context";
import iconSet from "@expo/vector-icons/build/Fontisto";
import { CryptoScreen } from "./src/screens/cureentBetScreens/CryptoScreen";
import { ResourseScreen } from "./src/screens/cureentBetScreens/ResourseScreen";
import { StockScreen } from "./src/screens/cureentBetScreens/StockScreen";
import { CurrencyScreen } from "./src/screens/cureentBetScreens/CurrencyScreen";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const BetsStack = createStackNavigator();
const MyBetsStack = createStackNavigator();
//const ProfileStack = createStackNavigator();

const BetsStackScreen = () => {
  return (
    <BetsStack.Navigator screenOptions={{ headerShown: false }}>
      <BetsStack.Screen
        name="Bets"
        options={{ headerShown: false }}
        component={BetsScreen}
      />
      <BetsStack.Screen name="Crypto" component={CryptoScreen} />
      <BetsStack.Screen name="Resources" component={ResourseScreen} />
      <BetsStack.Screen name="Stocks" component={StockScreen} />
      <BetsStack.Screen name="Currency" component={CurrencyScreen} />
    </BetsStack.Navigator>
  );
};
const MyBetsStackScreen = () => {
  return (
    <MyBetsStack.Navigator>
      <MyBetsStack.Screen
        name="MyBets"
        options={{ headerShown: false }}
        component={MyBetsScreen}
      />
    </MyBetsStack.Navigator>
  );
};
/*const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};*/

export default () => {
  const [isReady, setIsReady] = useState(false);
  const [userToken, setUserToken] = useState(false);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken(true);
      },
    };
  });

  if (!isReady) {
    return (
      <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} />
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Tabs.Navigator
            tabBarOptions={{
              tabStyle: {
                backgroundColor: "#141E30",
                paddingBottom: 5,
              },
              inactiveTintColor: "#FFFF",
              labelStyle: { fontFamily: "open-light" },
            }}
          >
            <Tabs.Screen
              name="Bets"
              component={BetsStackScreen}
              options={{
                tabBarIcon: () => {
                  return (
                    <Image source={require("./assets/img/bet-icon.png")} />
                  );
                },
              }}
            />
            <Tabs.Screen
              name="My bets"
              component={MyBetsStackScreen}
              options={{
                tabBarIcon: () => {
                  return (
                    <Image source={require("./assets/img/my-bet-icon.png")} />
                  );
                },
              }}
            />
            {/*<Tabs.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                tabBarIcon: () => {
                  return (
                    <Image source={require("./assets/img/profile-icon.png")} />
                  );
                },
              }}
            />*/}
          </Tabs.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <AuthStack.Screen
              name="Registration"
              options={{ headerShown: false }}
              component={RegistrationScreen}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
/*export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} />
    );
  }*/
//}
