import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import splash_logo from "../assets/icon/splash_logo.png";

function OnBoarding({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon/splash_logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "30%",
    objectFit: "fill",
  },
});

export default OnBoarding;
