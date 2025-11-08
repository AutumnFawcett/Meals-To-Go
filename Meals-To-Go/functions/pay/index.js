module.exports.payRequest = async (request, response, stripeClient) => {
 const body = JSON.parse(request.body);
 const { token, amount } = body; 
 stripeClient.paymentIntents.create({
   amount,
   currency: "USD",
   payment_method: ['card'],
   payment_method_data: {
     type: 'card',
     card: {
       token,
     },
   },
   confirm: true,
  }).then((paymentIntent) => {
    response.json(paymentIntent);
  }).catch((error) => {
    console.error("Error processing payment:", error);
    response.status(400).send({ error: "Payment processing failed" });
  });
};  

/* 
module.exports.payRequest = async (request, response, stripeClient) => {
  try {
    const { amount, currency, source } = request.body;

    const charge = await stripeClient.charges.create({
      amount,
      currency,
      source,
    });

    response.status(200).send(charge);
  } catch (error) {
    console.error("Error processing payment:", error);
    response.status(500).send({ error: "Payment processing failed" });
  }
};  
*/