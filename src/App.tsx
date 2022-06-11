import React, { useState, useEffect, useCallback } from "react";

import { NativeBaseProvider, Box } from "native-base";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { Home } from "./presentation/screens/Home";

import theme from "./global/theme";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Rubik_300Light,
          Rubik_400Regular,
          Rubik_500Medium,
          Rubik_600SemiBold,
          Rubik_700Bold,
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} onLayout={onLayoutRootView}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
