import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";
import wandererApi from "../../API/Wanderer";
import { Context as AuthContext } from "../../Context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const Products = ({ navigation }) => {
  const [productData, setProductData] = useState(null);
  const { signout } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    apicall();
  }, [isFocused]);

  const apicall = async () => {
    try {
      const response = await wandererApi.get("/api/products/getallproducts");
      setProductData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={{ height: "30%" }}>
        <View
          style={{
            backgroundColor: "#292929",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{ marginTop: 30, marginLeft: 20 }}
              onPress={signout}
            >
              <FontAwesome name="sign-out" size={35} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 30, marginRight: 30 }}
              onPress={() => {
                navigation.navigate("AddProduct");
              }}
            >
              <Octicons name="diff-added" size={35} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 70,
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 0,
              }}
            >
              Get ready for your trip.
            </Text>

            <Image
              source={require("../../../images/w2.jpg")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                marginLeft: 50,
                marginTop: -20,
              }}
            />
          </View>
        </View>
      </View>
      {productData && (
        <FlatList
          data={productData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
        />
      )}
    </>
  );
};
export default Products;
