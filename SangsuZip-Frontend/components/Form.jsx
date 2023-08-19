import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Blue, DarkGray, LightGray } from "../style/color";
import { useNavigation } from "@react-navigation/native";
import { LoginApi, RegisterApi } from "../api/AuthApi";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function Form({ isLoginPage }) {
  const [username, setUsername] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const navigation = useNavigation();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
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

  const goRegisterHandler = () => {
    navigation.navigate("Register");
  };

  const loginHandler = () => {
    let loginData = {
      id,
      password,
    };
    LoginApi(loginData).then((res) => {
      if (res.status === 200) navigation.navigate("Alert");
      else Alert("로그인에 실패하였습니다.");
    });
  };

  const registerHandler = () => {
    let registerData = {
      id,
      password,
      name: username,
      deviceToken: expoPushToken,
    };
    RegisterApi(registerData).then((res) => {
      if (res.status === 200) {
        Alert("회원가입에 성공하였습니다!");
        navigation.navigate("Login");
      } else Alert("회원가입에 실패하였습니다.");
    });
  };

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

  return (
    <KeyboardAvoidingView style={styles.form} behavior="padding">
      {!isLoginPage ? (
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={isLoginPage ? loginHandler : registerHandler}
      >
        <Text style={styles.buttonText}>
          {isLoginPage ? "로그인" : "회원가입"}
        </Text>
      </TouchableOpacity>
      {isLoginPage ? (
        <View style={styles.registerContainer}>
          <Text style={styles.register}>아이디가 없으신가요?</Text>
          <TouchableOpacity onPress={goRegisterHandler}>
            <Text>회원 가입</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default Form;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "90%",
  },
  input: {
    width: "100%",
    height: 50,

    borderColor: `${LightGray}`,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,

    fontSize: "16",
    fontWeight: "700",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: `${Blue}`,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",

    fontSize: "16",
    fontWeight: "700",
  },
  registerContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: `${DarkGray}`,
  },
});
