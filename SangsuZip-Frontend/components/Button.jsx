import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles(props.isSelected).button}>
        <Text style={styles(props.isSelected).text}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = (isSelected) =>
  StyleSheet.create({
    button: {
      width: 167,
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      elevation: 3,
      margin: 10,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: isSelected ? "#3386FF" : "#D4D8DE",
    },
    text: {
      fontSize: "16px",
      color: isSelected ? "#3386FF" : "#D4D8DE",
    },
  });
