// src/features/restaurants/components/restaurantinfocomponent.js
import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { Favourite } from "../../../components/favourite/favourite.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurantinfostyles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photo = "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg", // 👈 single image
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover
          source={{ uri: photo }}   // 👈 now pulls directly from `photo`
          resizeMode="cover"
        />
      </View>

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId || name}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

/* edits 1
// src/features/restaurants/components/restaurantinfocomponent.js

import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { Favourite } from "../../../components/favourite/favourite.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurantinfostyles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover source={{ uri: photos[0] }} resizeMode="cover" />
      </View>

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
*/


/* class edits
import React from "react";
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import { View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component"
import { Text } from "../../../components/typography/text.component"
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourite } from "../../../components/favourite/favourite.component";
import { Image } from "expo-image";

import { 
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address, 
} from "./restaurantinfostyles";

const Open = styled(SvgXml)`
    flex-direction: row;
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    
    const {
        name = 'Some Restaurant', 
        icon = "https://cdn-icons-png.freepik.com/256/9638/9638457.png?semt=ais_hybrid",
        photos = [ "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;
   
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
   <RestaurantCard elevation={5}>
    <View>
        <Favourite restaurant={restaurant} />
<Image
  source={
    restaurant.photos?.[0]
      ? { uri: restaurant.photos[0] }
      : { uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg" }
  }
  style={{
    width: "100%",
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }}
  contentFit="cover"
  transition={500}
/>
    </View>

  <Info>
    <Text variant="label">{restaurant.name}</Text>
    <Section>
      <Rating>
        {ratingArray.map((_, i) => (
          <SvgXml key={i} xml={star} width={20} height={20} />
        ))}
      </Rating>
      <SectionEnd>
        {isClosedTemporarily && (
          <Text variant="error">CLOSED TEMPORARILY</Text>
        )}
        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
        <Icon source={{ uri: restaurant.icon }} />
      </SectionEnd>
    </Section>
    <Address>{restaurant.address}</Address>
  </Info>
</RestaurantCard>    
        );
};
*/


/* without using components/typography/textcomponents.js
import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';

import { Spacer } from "../../../components/spacer/spacercomponent"
import star from "../../../../assets/star";
import open from "../../../../assets/open";


const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`; // all components can receive properties (), refer to spacing.js for [] array index #
// refer to colors.js for color property reference

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
     color: ${(props) => props.theme.colors.ui.primary};
    `;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`; // for more information on advanced styled components "Theming" > https://styled-components.com/docs/advanced 

const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section =styled(View)`
    flex-direction: row;
    aligin-items: center;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Open = styled(SvgXml)`
    flex-direction: row;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
    
    const {
        name = 'Some Restaurant', 
        icon = "https://cdn-icons-png.freepik.com/256/9638/9638457.png?semt=ais_hybrid",
        photos = [ "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
   
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source ={{ uri: photos[0]}} />
            <Info>
                <Section>
                <Title>{name}</Title>
                      <SectionEnd>
                          {isClosedTemporarily && (
                            <Text variant="label" style={{ color: "red"}}>
                            CLOSED TEMPORARILY
                            </Text>
                        )}
                        </SectionEnd>
                </Section>
                <Section>
                    <Rating>
                        {ratingArray.map(() =>
                            <SvgXml xml={star} width={20} height={20} />
                        )}
                    </Rating>
                    <SectionEnd>
                        <Spacer position="left" size="large">
                        {isOpenNow && <Open xml={open} width={30} height={30} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                        <Image style={{ width: 30, height: 30 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>    
        )
};
*/

/* This is one way of styling using StyleSheets - however the above way is industry standard using styled-components

import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
    
    const {
        name = 'Some Restaurant', 
        icon,
        photos = [ "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
   
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source ={{ uri: photos[0]}} />
            <Text style={styles.title}>{name}</Text>
        </Card>    
        )
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    title: { padding: 16 },
});
*/

/* Before adding placeId ...
import React from "react";
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { Spacer } from "../../../components/spacer/spacercomponent"
import { Text } from "../../../components/typography/textcomponent"
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { 
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address, 
} from "./restaurantinfostyles";

const Open = styled(SvgXml)`
    flex-direction: row;
`;


export const RestaurantInfo = ({ restaurant = {} }) => {
    
    const {
        name = 'Some Restaurant', 
        icon = "https://cdn-icons-png.freepik.com/256/9638/9638457.png?semt=ais_hybrid",
        photos = [ "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
   
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source ={{ uri: photos[0]}} />
            <Info>
                <Section>
                <Text variant="label">{name}</Text>
                      <SectionEnd>
                          {isClosedTemporarily && (
                            <Text variant="error"> CLOSED TEMPORARILY</Text>
                        )}
                        </SectionEnd>
                </Section>
                <Section>
                    <Rating>
                        {ratingArray.map((_, index) => (
                            <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        <Spacer position="left" size="large">
                        {isOpenNow && <Open xml={open} width={30} height={30} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                        <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Text variant="body">{address}</Text>
            </Info>
        </RestaurantCard>    
        )
};
*/