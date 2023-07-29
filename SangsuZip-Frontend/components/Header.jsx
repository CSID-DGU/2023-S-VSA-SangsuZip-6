import { StyleSheet, Text, View } from "react-native";
import { LightGray } from "../style/color";

const Header = () => {
  return (
    <View style={styles.header}>
        {/* 이미지나 앱 이름 정해지면 변경 */}
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: `${LightGray}`,
  },
});

export default Header;
