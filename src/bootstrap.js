import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "open-italic": require("../assets/fonts/OpenSans-Italic.ttf"),
    "open-light": require("../assets/fonts/OpenSans-Light.ttf"),
  });
}
