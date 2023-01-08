import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  console.log("IMAGE:::", product.imageurls[0]);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", { productdetails: product })
      }
      style={styles.card}
    >
      {product.imageurls[0] == null ? (
        <Image
          style={styles.image}
          source={require("../../../images/no-image.png")}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          resizeMode="cover"
        />
      )}
      <View style={styles.container}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Rs. {product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: "90%",
    elevation: 2,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  image: {
    height: 180,
    width: "100%",
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    color: "#00a46c",
    paddingRight: 20,
  },
});

export default ProductCard;
