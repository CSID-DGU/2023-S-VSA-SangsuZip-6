import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Blue, DarkGray, LightGray } from "../style/color";

const Item = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>이상 사항</Text>
        <Checkbox
          style={styles.checkbox}
          onValueChange={setIsChecked}
          value={isChecked}
          color={isChecked ? `${Blue}` : ""}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    borderBottomColor: `${LightGray}`,
    width: 330,
    height: 60,
  },
  itemText: {
    padding: "3%",
    color: `${DarkGray}`,
    fontSize: 16,
  },
  itemButton: { marginLeft: "10%", padding: "3%" },
  checkbox: {
    margin: 8,
    padding: "4%",
    borderColor: `${LightGray}`,
  },
});

export default Item;
