import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../Components/Input";
import wandererApi from "../../API/Wanderer";

const AddProduct = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const post = async () => {
    try {
      console.log("data", name, price, description);
      const response = await wandererApi.post("/api/products/addproduct", {
        name: name,
        price: price,
        dicription: description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.Header}>
        <Text style={styles.textHeader}>Add Product Details</Text>
      </View>

      <View style={styles.Container}>
        <View style={styles.form}>
          <View style={styles.left}>
            <Text style={styles.lable}>Name:</Text>
            <Text style={styles.lable}>Price:</Text>
            <Text style={styles.lable}>Description:</Text>
          </View>

          <View style={styles.right}>
            <Input
              term={name}
              onChangeText={(newTerm) => setName(newTerm)}
              keyType={"default"}
              mask={"formal shoes"}
            />
            <Input
              term={price}
              onChangeText={(newTerm) => setPrice(newTerm)}
              keyType={"number-pad"}
              mask={"1000"}
            />
            <Input
              term={description}
              onChangeText={(newTerm) => setDescription(newTerm)}
              keyType={"default"}
              mask={"description of product"}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={post}>
          <Text style={styles.textButton}>Post</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    backgroundColor: "#292929",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  Container: {
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: 50,
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 3,
  },
  form: {
    flexDirection: "row",
  },
  lable: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 50,
  },
  button: {
    backgroundColor: "#292929",
    height: 70,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  textButton: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AddProduct;
