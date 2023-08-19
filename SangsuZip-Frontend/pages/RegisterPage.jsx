import React, { useEffect, useRef, useState } from "react";
import { Image, Keyboard, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";
import splash_logo from "../assets/icon/splash_logo.png";

function RegisterPage() {
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
      <Form style={styles.form} isLoginPage={false} />
    </SafeAreaView>
  );
}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    flex: 1,
  },
  icon: {
    flex: 0.8,
    width: "80%",
    height: "auto",
    objectFit: "fill",
    resizeMode: "contain",
  },
  form: {
    flex: 2,
    width: "100%",
  },
});
