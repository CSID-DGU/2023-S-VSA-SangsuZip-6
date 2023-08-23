import { Image, StyleSheet, Text, View } from "react-native";
import { LightGray } from "../style/color";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/icon/logo.png")} style={styles.logo} />
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
  logo: {
    width: "30%",
    height: "50%",
    objectFit: "fill",
  },
});

export default Header;
