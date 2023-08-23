import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding from "./pages/OnBoarding";
import AlertPage from "./pages/AlertPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen name="Register" component={RegisterPage} options={{title:"회원 가입"}}/>
        <Stack.Screen
          name="Alert"
          component={AlertPage}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
