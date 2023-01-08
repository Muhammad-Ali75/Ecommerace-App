import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";

const Stack = createNativeStackNavigator();

export const MainScreensStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  );
};
