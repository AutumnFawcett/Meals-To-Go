// src/features/components/checkout.styles.js

import styled from "styled-components/native";
import { Avatar, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

/* --- Cart Empty State --- */
export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 180,
  icon: "cart",
})`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

/* --- Loading Spinner --- */
export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: "large",
  animating: true,
  color: colors.brand.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;

/* --- Form Inputs --- */
export const NameInput = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  outlineColor: props.theme.colors.ui.primary,
  activeOutlineColor: props.theme.colors.brand.quaternary,
  textColor: props.theme.colors.text.primary,
}))`
  margin: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 10px;
`;

/* --- Buttons --- */
export const PayButton = styled(Button).attrs((props) => ({
  mode: "contained",
  icon: "cash",
  buttonColor: props.theme.colors.brand.quaternary, // primary accent
  textColor: props.theme.colors.bg.primary,       // readable contrast
  labelStyle: { fontWeight: "bold", letterSpacing: 0.5 },
}))`
  width: 80%;
  align-self: center;
  border-radius: 10px;
  padding-vertical: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const ClearButton = styled(Button).attrs((props) => ({
  mode: "outlined",
  icon: "cart-off",
  textColor: props.theme.colors.text.tertiary,
  labelStyle: { fontWeight: "500" },
}))`
  width: 80%;
  align-self: center;
  border-radius: 10px;
  padding-vertical: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
`;


/*
import styled from "styled-components/native";
import { Avatar, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
    align-items: center;
    justify-content: center;  
    flex: 1;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: "large ",
    animating: true,
    color: colors.brand.primary,
})`
    position: absolute;
    top: 50%;
    left: 35%;
    z-index: 999;
`;


export const CartIcon = styled(Avatar.Icon).attrs({
    size: 180,
    icon: "cart",
})`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
`  ;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;
export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;
*/