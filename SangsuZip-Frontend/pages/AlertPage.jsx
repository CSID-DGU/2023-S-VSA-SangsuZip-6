import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import Item from "../components/Item";
import ConfirmButton from "../components/ConfirmButton";
import { SafeAreaView, StyleSheet, View } from "react-native";

function AlertPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [abnormalDatas, setAbnormalDatas] = useState();
  const [isSelected, setIsSelected] = useState([]);

  useEffect(() => {
    const filteredAbnormalDatas = datas.data.filter(
      (data) => data.isChecked === isChecked
    );
    setAbnormalDatas(filteredAbnormalDatas);
  }, [isChecked, datas]);

  const updateSelected = (itemId) => {
    if (!isSelected.includes(itemId)) {
      setIsSelected((prevSelected) => [...prevSelected, itemId]);
    } else {
      setIsSelected((prevSelected) =>
        prevSelected.filter((selectedId) => selectedId !== itemId)
      );
    }
  };

  const updateDataIsChecked = (selectedId) => {
    const updatedData = datas.data.map((data) => {
      if (data.id === selectedId) {
        return { ...data, isChecked: true };
      }
      return data;
    });

    setDatas({ ...datas, data: updatedData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.subheader}>
        <SubHeader />
        <Category isChecked={isChecked} setIsChecked={setIsChecked} />
      </View>
      <View style={styles.body}>
        {abnormalDatas &&
          abnormalDatas.map((abnormalData, index) => (
            <Item
              id={abnormalData.id}
              key={index}
              updateSelected={updateSelected}
              datas={datas}
              {...abnormalData}
            />
          ))}
      </View>
      <View style={styles.footer}>
        <ConfirmButton
          selectedIds={isSelected}
          updateDataIsChecked={updateDataIsChecked}
        />
      </View>
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
    flex: 6,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

export default AlertPage;
