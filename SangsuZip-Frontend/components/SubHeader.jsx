import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Black } from "../style/color";

const SubHeader = () => {
  return (
    <View style={styles.subheader}>
      <Text style={styles.text}>알림</Text>
      <Switch style={styles.switch} />
    </View>
  );
};

const styles = StyleSheet.create({
  subheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    paddingBottom: 2,
  },
  text: {
    fontSize: 22,
    color: `${Black}`,
    fontWeight: "700",
    // margin % 변경 핊요
    marginLeft: "44.5%",
  },
  switch: {
    marginLeft: "auto",
  },
});

export default SubHeader;
