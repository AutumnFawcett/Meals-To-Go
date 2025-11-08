// src/infrastructure/navigation/settings.navigator.js

import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favorites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantdetailscreen";


import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{ 
        headerShown: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsMain"
        component={SettingsScreen}
      />
      <SettingsStack.Screen 
        name="Favourites" 
        component={FavouritesScreen} 
      />
      <SettingsStack.Screen 
      name="Camera" 
      component={CameraScreen} 
      />
      <SettingsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        /> 
    </SettingsStack.Navigator>
  );
};