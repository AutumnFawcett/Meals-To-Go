
// App.js

//React & Expo imports
import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native"; // for more information on advanced styled components "Theming" > https://styled-components.com/docs/advanced 
// Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
// theme & navigation imports
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
// firebase 
import { initializeApp } from 'firebase/app';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDOhc6jSxlHkZ3nFpgL-HzqeAzTLVVI6QE",
  authDomain: "mealstogo-89dd1.firebaseapp.com",
  projectId: "mealstogo-89dd1",
  storageBucket: "mealstogo-89dd1.firebasestorage.app",
  messagingSenderId: "1043132232210",
  appId: "1:1043132232210:web:b8bf2db5de6edaa3f9decb"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

   const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
         <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>    
    <ExpoStatusBar style="auto" />
    </>
  );
}



/* 
import { NavigationContainer } from "@react-navigation/native";

import { SafeArea } from "./src/components/utility/safeareacomponent"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;
const Map = () => <SafeArea><Text>Map</Text></SafeArea>;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

*/
/* 
how to use: Theme Provider ... Advanced Styled Components in React Native
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>   
https://styled-components.com/docs/advanced 
Also see React Native Basics "Styled Components"
https://styled-components.com/docs/basics#react-native 
*/
