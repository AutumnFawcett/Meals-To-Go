// /src/components/utility/safeareacomponent.js

import React from 'react';
import { StatusBar, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  `; // referenced variables with this syntax ${} and between the brackets we can put a variable from outside, must add px to the end. 
