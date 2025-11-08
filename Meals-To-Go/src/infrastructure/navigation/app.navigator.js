// src/infrastructure/navigation/app.navigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

/*Screens */
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/mapscreen";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutNavigator } from "./checkout.navigator";

import { CartContextProvider } from "../../services/cart/cart.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Checkout: "cart",
    Settings: "settings",
};


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
       <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <CartContextProvider>
               <Tab.Navigator
                screenOptions={({ route }) => ({ // route-based tab icons
                    ...createScreenOptions({ route }), // hide headers everywhere in tabs
                    headerShown: false,
                    tabBarActiveTintColor: "tomato",  // v6 style
                    tabBarInactiveTintColor: "gray",  // v6 style
                    })}
                    >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Checkout" component={CheckoutNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
              </CartContextProvider>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
);