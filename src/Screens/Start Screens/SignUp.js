import React, { useState, useContext } from "react";

import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Context as AuthContext } from "../../Context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";

const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";
  return "";
};
const passwordValidator = (password) => {
  if (!password) return "Password can't be empty.";
  if (password.length < 8)
    return "Password must be at least 8 characters long.";
  return "";
};

const SignUp = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    name: "",
    Contact: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [errorEmailMessage, setEmailErrorMessage] = useState("");
  const [errorPasswordMessage, setPasswordErrorMessage] = useState("");

  if (state.errorMessage != "") {
    Alert(state.errorMessage);
  }

  const textInputChange = (value) => {
    if (emailValidator(value) == "") {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
        isValidUser: false,
      });
      setEmailErrorMessage(emailValidator(value));
    }
  };
  const handlePasswordChange = (value) => {
    if (passwordValidator(value) == "") {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
      setPasswordErrorMessage(passwordValidator(value));
    }
  };

  const textNameChange = (value) => {
    setData({
      ...data,
      name: value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const ContactChange = (value) => {
    setData({
      ...data,
      Contact: value,
    });
  };
  return (
    <ScrollView>
      <LinearGradient colors={["#052A37", "#12DFEB"]} style={styles.container}>
        <StatusBar />
        <Animatable.View animation="fadeIn" duration={2000}>
          <Image
            style={{
              tintColor: "white",
              marginTop: 50,
              alignSelf: "center",
              width: 150,
              height: 150,
            }}
            source={require("../../../images/add-user.png")}
          />
        </Animatable.View>
        <View style={styles.header} />
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_header}>SignUp </Text>

          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <Icon color="grey" name="person-outline" size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              autoCapitalize="words"
              maxLength={32}
              onChangeText={(value) => textNameChange(value)}
            />
          </View>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <MaterialIcons name="mail-outline" size={26} color="grey" />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => textInputChange(value)}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          {emailValidator(data.email) !== "" ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errorEmailMessage}</Text>
            </Animatable.View>
          ) : null}

          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <Icon color="grey" name="lock-outline" size={25} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              placeholder="Password"
              maxLength={32}
              autoCapitalize="none"
              onChangeText={(value) => handlePasswordChange(value)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {passwordValidator(data.password) !== "" ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>{errorPasswordMessage}</Text>
            </Animatable.View>
          ) : null}

          <Text style={styles.text_footer}>Contact </Text>
          <View style={styles.action}>
            <Icon color="grey" name="phone" size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="+92 XXX XXXXXXX"
              autoCapitalize="none"
              keyboardType="phone-pad"
              maxLength={13}
              onChangeText={(value) => ContactChange(value)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={async () => {
                await signup({
                  name: data.name,
                  email: data.email,
                  password: data.password,
                  cpassword: data.password,
                });
                navigation.navigate("SignInScreen");
              }}
              style={styles.SignIn}
            >
              <LinearGradient style={styles.SignIn} colors={["grey", "teal"]}>
                <Text style={styles.textSign}>SignUp</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.SignIn,
                { borderColor: "grey", borderWidth: 1, marginTop: 15 },
              ]}
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text style={[styles.textSign, { color: "teal" }]}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </LinearGradient>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  header: {
    height: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    height: 580,
    resizeMode: "cover",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  text_header: {
    color: "teal",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 25,
  },
  text_footer: {
    color: "grey",
    fontSize: 15,
    marginTop: 10,
  },

  title: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    color: "grey",
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.os === "ios" ? 0 : -4,
    paddingLeft: 10,
    color: "grey",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },

  SignIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  errorMsg: {
    color: "red",
  },
});
