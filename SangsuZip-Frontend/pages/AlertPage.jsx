import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import Item from "../components/Item";
import ConfirmButton from "../components/ConfirmButton";
import { SafeAreaView, StyleSheet, View } from "react-native";

function AlertPage() {
  const datas = {
    data: [
      {
        id: "1",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: false,
        adminName: null,
      },
      {
        id: "2",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: false,
        adminName: null,
      },
      {
        id: "3",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: true,
        adminName: "김태욱",
      },
      {
        id: "4",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: true,
        adminName: "박광렬",
      },
      {
        id: "5",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: true,
        adminName: "정관희",
      },
      {
        id: "5",
        category: "낙상",
        date: "2012. 12. 20. 오후 12:00:00",
        isChecked: true,
        adminName: "정원호",
      },
    ],
  };

  const [isChecked, setIsChecked] = useState(false);
  const [abnormalDatas, setAbnormalDatas] = useState();

  useEffect(() => {
    const filteredAbnormalDatas = datas.data.filter(
      (data) => data.isChecked === isChecked
    );
    setAbnormalDatas(filteredAbnormalDatas);
  }, [isChecked]);

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
            <Item key={index} {...abnormalData} />
          ))}
      </View>
      <View style={styles.footer}>
        <ConfirmButton />
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
