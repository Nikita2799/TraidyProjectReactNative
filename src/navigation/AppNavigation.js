import { createAppContainer, NavigationContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { BetsScreen } from "../screens/BetsScreen";
import { Test } from "../component/Test";
import {
  createBottomTabNavigator,
  createTabNavigator,
} from "react-navigation-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import { MyBetsScreen } from "../screens/MyBetsScreen";
import { BottomNaigation } from "./BottomNavigation";

/*const LoginNav = createStackNavigator(
  {
    Main: {
      screen: LoginScreen,
      navigationOptions: { tabBarVisible: false },
    },
    Registry: {
      navigationOptions: { tabBarVisible: false },
      screen: RegistrationScreen,
    },
    Bets: { screen: BetsScreen },
  },
  { headerMode: "none" }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Bets: { screen: BetsScreen },

    Profile: { screen: ProfileScreen },

    MyBets: { screen: MyBetsScreen },
  },
  { headerMode: "none" }
);

export const AppNavigation = createAppContainer(LoginNav);
export const AppBottomNavigation = createAppContainer(BottomNavigator);
*/
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sign in" component={LoginScreen} />
    <AuthStack.Screen name="Sign up" component={RegistrationScreen} />
  </AuthStack.Navigator>;
};

export default () => {
  <NavigationContainer>
    <AuthStackScreen />
  </NavigationContainer>;
};
