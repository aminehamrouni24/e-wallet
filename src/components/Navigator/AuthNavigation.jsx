import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../../pages/Splash/Splash";
import OnBoarding from "../../pages/OnBoarding/OnBoarding";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import Register from "../../pages/Register/Register";
import NextRegister from "../../pages/Register/NextRegister";
import Login from "../../pages/Login/Login";
import { Home } from "../../pages";
import Navigator from ".";
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Navigator} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NextRegister" component={NextRegister} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
