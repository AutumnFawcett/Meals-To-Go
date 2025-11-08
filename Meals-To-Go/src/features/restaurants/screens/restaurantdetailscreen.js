// src/features/restaurants/screens/restaurantdetailscreen.js

import React, { useState, useContext } from "react";
import { List, useTheme, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurantinfocomponent";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safearea.component";
import { OrderButton } from "../components/restaurantliststyles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);    

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  const theme = useTheme();

  const itemStyle = { backgroundColor: "f5f5f5" }; // light grey

  return (
    <SafeArea>
        <RestaurantInfoCard restaurant={restaurant} />
        <ScrollView>
            <List.Accordion
                title="Breakfast"
                style={itemStyle}
                left={(props) => <List.Icon {...props} color={breakfastExpanded ? "tomato" : props.color} icon="bread-slice" />} 
                expanded={breakfastExpanded}
                titleStyle={{ color: breakfastExpanded ? "tomato" : "black" }}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                theme={{ colors: { primary: "tomato" } }} // ← changes ripple / press color
        >
            <Divider />
            <List.Item title="Eggs Benedict" />
            <Divider />
            <List.Item title="Classic Breafast"  />
            <Divider />
            <List.Item title="Breakfast Sandwich" />
            <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion 
            title="Lunch"
            style={itemStyle}
            left={(props) => <List.Icon {...props} color={lunchExpanded ? "tomato" : props.color} icon="hamburger" />}
            titleStyle={{ color: lunchExpanded ? "tomato" : "black" }}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
            theme={{ colors: { primary: "tomato" } }} // ← changes ripple / press color
        >
            <Divider />
            <List.Item title="Buger w/ Fries" />
            <Divider />
            <List.Item title="Steak Sandwich" />
            <Divider />
            <List.Item title="Mushroom Soup" />
            <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          style={itemStyle}
          left={(props) => <List.Icon {...props} color={dinnerExpanded ? "tomato" : props.color} icon="food-variant" />}
          titleStyle={{ color: dinnerExpanded ? "tomato" : "black" }}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          theme={{ colors: { primary: "tomato" } }} // ← changes ripple / press color
        >
          <Divider />
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          style={itemStyle}
          left={(props) => <List.Icon {...props} color={drinksExpanded ? "tomato" : props.color} icon="cup" />}
          titleStyle={{ color: drinksExpanded ? "tomato" : "black" }}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          theme={{ colors: { primary: "tomato" } }} // ← changes ripple / press color
        >
          <Divider />
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
          <Divider />
        </List.Accordion>
       
        </ScrollView>
        <Spacer position="bottom" size="large" />
        <Spacer proposition="bottom" size="large">
          <OrderButton
            icon="cash"
            mode="contained"
            onPress={() => {
              addToCart({ item: "special", price: 1299 }, restaurant);
              navigation.navigate("Checkout");
            }}
          >
            Order Special Only $12.99!
        </OrderButton>

        </Spacer>
    </SafeArea>
  );
};

