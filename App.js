import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Navigator } from "./src/components";
import { Theme } from "./src/constants";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./src/components/Navigator/AuthNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="light" />
        <AuthNavigation />
       
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.RichBlackFOGRA39,
  },
});
