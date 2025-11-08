import React from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
    return (
    <AccountBackground>
      <AccountCover />
        <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/watermelon.json")}
          style={{width: "100%", height: "100%"}}
          autoPlay
          loop
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <Spacer position="top" size="large" />
      <AccountContainer>
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer position= "top" size="large" />
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
      <Spacer />
      </AccountContainer>
    </AccountBackground>
  );
};