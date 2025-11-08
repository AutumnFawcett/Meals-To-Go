import React, { useContext, useState, useEffect } from "react";
import { Platform } from "react-native"; // Import Platform
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

// Style the SearchContainer using styled-components
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// Styled Searchbar component to define the shadow once
const StyledSearchbar = styled(Searchbar)`
  background-color: white;
  border-radius: 5px;
  /* Shadow for iOS */
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.2;
    shadow-radius: 4px;
  `}
  /* Shadow for Android */
  ${Platform.OS === 'android' && `
    elevation: 4;
  `}
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <StyledSearchbar
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggled}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};