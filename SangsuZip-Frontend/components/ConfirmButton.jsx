import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Blue } from "../style/color";

const ConfirmButton = ({ selectedIds, updateDataIsChecked }) => {
  const handleConfirm = () => {
    selectedIds.forEach((id) => {
      updateDataIsChecked(id);
    });
  };

  return (
    <Pressable onPress={handleConfirm}>
      <View style={styles.button}>
        <Text style={styles.text}>확인</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    elevation: 3,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: `${Blue}`,
    backgroundColor: `${Blue}`,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});

export default ConfirmButton;
