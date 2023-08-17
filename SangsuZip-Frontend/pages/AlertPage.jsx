import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import Item from "../components/Item";
import ConfirmButton from "../components/ConfirmButton";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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

  //
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token);
      })
      .then(async () => {
        await schedulePushNotification();
      });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const filteredAbnormalDatas = datas.data.filter(
      (data) => data.isChecked === isChecked
    );
    setAbnormalDatas(filteredAbnormalDatas);
  }, [isChecked]);
  console.log(expoPushToken);
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const projectId = "c4dc44fd-30e1-4823-9070-77db28045df5";
    token = await Notifications.getExpoPushTokenAsync({
      projectId,
    });

    console.log(token.data);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token.data;
}

export default AlertPage;
