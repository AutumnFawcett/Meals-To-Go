import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51SHyMYQtSWARM8sZ9B7EL8KABwNHHKQsgahwxXSERHNfPrDZHaowYn3arTYw8snfyC0EJHyeC9ilZSVjvRhczytq00NypLpaB2"
);

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};

export const payRequest = async (amount, currency, source) => {
  try {
    const response = await fetch(
      "https://us-central1-mealstogo-9f6f3.cloudfunctions.net/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          source,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Payment request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in payRequest:", error);
    throw error;
  }
};