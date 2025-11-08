// src/features/checkout/components/credit-card.component.js

import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { useTheme } from "react-native-paper";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const theme = useTheme();

  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const [exp_month, exp_year] = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month,
      exp_year,
      cvc: values.cvc,
      name,
    };

    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };

  return (
    <LiteCreditCardInput
      onChange={onChange}
      inputStyle={{
        borderRadius: 8,
        paddingHorizontal: 8,
      }}
      labelStyle={{
        fontWeight: "600",
      }}
    />
  );
};


/*
import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return (
  <LiteCreditCardInput
    onChange={onChange}
    inputStyle={{
      color: "white",
      backgroundColor: "#222",
      borderRadius: 8,
      paddingHorizontal: 10,
    }}
    labelStyle={{
      color: "tomato",
      fontWeight: "600",
    }}
    placeHolderColor="gray"
  />
);
};
*/