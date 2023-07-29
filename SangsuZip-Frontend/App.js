import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Item from "./components/Item";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Category from "./components/Category";
import ConfirmButton from "./components/ConfirmButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.subheader}>
        <SubHeader />
        <Category />
      </View>
      <View style={styles.body}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
      <View style={styles.footer}>
        <ConfirmButton />
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
  },
  subheader: {
    flex: 2,
  },
  body: {
    alignItems: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
