import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

const ProductDetails = ({ route, navigation }) => {
  const { productdetails } = route.params;

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <View style={styles.header}>
        <ScrollView
          // upper part pics
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 50 }}
        >
          <Image
            source={require("../../../images/shoes1.png")}
            style={
              ([styles.logo], [{ marginLeft: 30, height: 300, width: 300 }])
            }
            resizeMode="stretch"
          />
          <Image
            source={require("../../../images/shoes2.png")}
            style={
              ([styles.logo], [{ marginLeft: 20, height: 300, width: 300 }])
            }
            resizeMode="stretch"
          />
          <Image
            source={require("../../../images/shoes3.png")}
            style={
              ([styles.logo], [{ marginLeft: 10, height: 300, width: 300 }])
            }
            resizeMode="stretch"
          />
        </ScrollView>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>{productdetails.name}</Text>
        <Text
          style={{
            color: "gold",
            marginLeft: 300,
            fontSize: 20,
            marginTop: -28,
          }}
        >
          Rs. {productdetails.price}
        </Text>
        <Text style={styles.text}> Reviews:</Text>

        <Text style={{ color: "gold", marginLeft: 60, marginTop: -19 }}>
          {"  "}4.8
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 3, color: "white" }}>
          Description:
        </Text>
        <Text style={styles.text}>{productdetails.discription}</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#606A6D", "#14FC9B"]}
              style={styles.SignIn}
            >
              <Text style={styles.textSign}>Buy Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 400,
    backgroundColor: "#292929",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  logo: {
    width: 230,
    height: 290,
  },

  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },

  text: {
    color: "grey",
    marginTop: 10,
  },

  button: {
    alignItems: "flex-end",
    marginTop: 70,
  },

  SignIn: {
    width: 350,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
});
