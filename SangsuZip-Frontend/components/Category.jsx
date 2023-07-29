import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "./Button";
import { LightGray } from "../style/color";

const Category = () => {
  const [isSelected, setIsSelected] = useState([true, false]);
  const buttonList = ["미확인", "확인"];

  const handleClick = (idx) => {
    const selectedArr = Array(buttonList.length).fill(false);
    selectedArr[idx] = true;
    setIsSelected(selectedArr);
  };
  return (
    <View style={styles.category}>
      {buttonList.map((_, index) => (
        <Button
          key={index}
          onPress={() => handleClick(index)}
          title={buttonList[index]}
          isSelected={isSelected[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: `${LightGray}`,
  },
});

export default Category;
