import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Blue, DarkGray, LightGray } from "../style/color";

const Item = ({ category, adminName, date }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => {
    setIsModal(!isModal);
  };
  return (
    <TouchableOpacity onPress={modalHandler}>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>이상 사항</Text>
        <Checkbox
          style={styles.checkbox}
          onValueChange={setIsChecked}
          value={isChecked}
          color={isChecked ? `${Blue}` : ""}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModal}
          onRequestClose={() => {
            alert("zz");
            setIsModal(!isModal);
          }}
        >
          <View style={styles.centerView}>
            <Pressable onPress={() => setIsModal(!isModal)}>
              <View style={styles.modalView}>
                <Text style={styles.category}>
                  이상행동 카테고리: {category}
                </Text>
                <Text style={styles.date}>{date}</Text>
                {adminName === null ? (
                  <></>
                ) : (
                  <Text style={styles.admin}>관리자 : {adminName}</Text>
                )}
              </View>
            </Pressable>
          </View>
        </Modal>
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
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${DarkGray}`,
    opacity: 0.9,
  },
  modalView: {
    margin: 20,
    padding: 80,
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
  },
  admin: {
    fontSize: 14,
  },
});

export default Item;
