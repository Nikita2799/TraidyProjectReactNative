import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LoginScreen } from "../screens/LoginScreen";
import { RegistrationScreen } from "../screens/RegistrationScreen";

const PostNavigator = createStackNavigator(
  {
    Main: LoginScreen,
    Registry: {
      screen: RegistrationScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { headerMode: "none" }
);

export const AppNavigation = createAppContainer(PostNavigator);
