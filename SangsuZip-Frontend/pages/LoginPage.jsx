import React, { useEffect, useState } from "react";
import { Image, Keyboard, SafeAreaView, StyleSheet, Text } from "react-native";
import splash_logo from "../assets/icon/splash_logo.png";
import Header from "../components/Header";
import Form from "../components/Form";
function LoginPage() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardShown(false);
      }
    );

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      {!isKeyboardShown && <Image source={splash_logo} style={styles.icon} />}
      <Form style={styles.form} isLoginPage={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    flex: 0.8,
    width: "80%",
    height: "auto",
    objectFit: "fill",
    resizeMode: "contain",
  },
  form: {
    flex: 4,
    width: "100%",
    marginTop: 30,
  },
});

export default LoginPage;
