import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
    xl: 4,
    xxl: 5,
};

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    bottom: 'marginBottom',
    right: 'marginRight',
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};

const SpacerView  = styled.View`
    ${({ variant }) => variant };
`;

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

/*
export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>    
    )
}
    */

/* if we use...
const SpacerView  = styled.View`
    ${({ variant }) => variant };
`;
then we don't need...
export const Spacer = styled.View`
    ${({ position, size, theme }) => getVariant (position, size, theme)}
`;
*/
/*
Spacer.defaultProps = {
    position: 'top',
    size: 'small',
};
*/
/* instead of something like this... 
    margin-top: ${(props) => props.theme.space[1]};
`;

/* also can be done like this...
const TopSmall = styled.View`
    margin-top: 4px;
`;


const TopMedium = styled(View)`
    margin-top: 8px;
`;

const TopLarge = styled(View)`
    margin-top: 16px;
`;


const LeftSmall = styled(View)`
    margin-left: 4px;
`;

const LeftMedium = styled(View)`
    margin-left: 8px;
`;

const LeftLarge = styled(View)`
    margin-left: 16px;
`;

with all these using all these if statments like this... 
const TopSmall = styled(View)`
export const Spacer  = ({ variant }) => {
    if(variant === "top.medium") {
        return  <TopMedium />;
    }
    if(variant === "top.large") {
        return  <TopLarge />;
    }
    if(variant === "left.small") {
        return  <LeftSmall />;
    }
     if(variant === "left.medium") {
        return  <LeftMedium />;
    }
    return <TopSmall />;
};
*/

/* we can do something like this...
export const Spacer = ({ position, size }) => {
    return <SpacerComponent position={position} size={size} />;
}; 
or use something like we have above at the top of the syntax
*/