import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StartScreenStack } from "./Start Screens/StartScreenStack";
import { MainScreensStack } from "./Main Flow/MainScreensStack";

import { Context as AuthContext } from "../Context/AuthContext";

export const NavContainer = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return (
    <NavigationContainer>
      {state.token == null ? <StartScreenStack /> : <MainScreensStack />}
    </NavigationContainer>
  );
};
//
