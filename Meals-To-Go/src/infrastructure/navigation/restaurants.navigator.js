// src/infrastructure/navigation/restaurants.navigator.js

import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";


import RestaurantInfoCard from '../../features/restaurants/components/restaurantinfocomponent';
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurantsscreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantdetailscreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator 
      // headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false, // Hide the header for all screens in this stack
        
      }}
      >
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        
      /> 
    </RestaurantStack.Navigator>
  );
};