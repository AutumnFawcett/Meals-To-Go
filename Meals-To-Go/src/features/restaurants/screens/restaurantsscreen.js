// restaurantsscreen.js

import React, { useContext, useState } from 'react';
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safearea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from '../components/restaurantinfocomponent';
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourite/favouritesbar.component"
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context"
import { LocationContext } from "../../../services/location/location.context";

import { RestaurantList } from "../components/restaurantliststyles";
import { FadeIn } from 'react-native-reanimated';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;

  return (
  <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.red500} />
          </LoadingContainer>
        )}
        <Search 
          isFavouritesToggled={isToggled} 
          onFavouritesToggled={() => setIsToggled(!isToggled)} 
          />
          {isToggled && 
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          }
         {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};     



/*
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;
*/

/* #1 One Way: This is one way of styling using StyleSheets - however the above way is industry standard using styled-components
import React from 'react';
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

import { RestaurantInfo } from '../components/restaurantinfocomponent';

export const RestaurantsScreen = () => (
<SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
     </SafeAreaView>
);     

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16,
  
  },
  list: {
    flex: 1,
    padding: 16,
    backgrounColor: "blue",
  },
});
*/

/* #2 Second way: when we use FlatList we can change this code around
import React from 'react';
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import styled from "styled-components/native";

import { RestaurantInfo } from '../components/restaurantinfocomponent';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0}px;
`; // referenced variables with this syntax ${} and between the brackets we can put a variable from outside, must add px to the end. 

const SearchContainer = styled.View` 
  padding: ${(props) => props.theme.space[3]};
`; // all components recieve a () property, refer to spacing.js file for [] array index #

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

export const RestaurantsScreen = () => (
<SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
</SafeArea>
);     
*/

/*
const SearchContainer = styled.View` 
  padding: ${(props) => props.theme.space[3]};
`; // all components recieve a () property, refer to spacing.js file for [] array index #
*/