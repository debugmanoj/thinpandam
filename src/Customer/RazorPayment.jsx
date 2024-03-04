import React, { useState } from "react";
import RenderRazorPay from "./RenderRazorPay";
import AxiosService from "../utils/Api";
import customerapi from "../utils/CustomerApiRoutes";

function RazorPayment({ price, name, id, deliveryCharge }) {
  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  });

  const handleCreateOrder = async (amount, currency) => {
    try {
      const response = await AxiosService.post(
        `${customerapi.razorPayOrder.path}`,
        {
          amount: amount * 100, // convert amount into lowest unit (cents)
          currency,
          keyId: "rzp_test_rx9aoOCLKV5Qmg",
          keySecret: "3qLjhEUS5xAtlBxg6lZA1dS2",
        }
      );

      if (response && response.data.order_id) {
        setOrderDetails({
          orderId: response.data.order_id,
          currency: response.data.currency,
          amount: response.data.amount,
        });
        console.log("I ENtering the razor payment");
        setDisplayRazorpay(true);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      // Handle error: display error message or perform necessary actions
    }
  };

  return (
    <div>
      <a
        className="StylePlaceOrderButton"
        onClick={() => handleCreateOrder(price, "INR")}
      >
        Place Order
      </a>

      {displayRazorpay ? (
        <RenderRazorPay
          name={name}
          deliveryCharge={deliveryCharge}
          amount={orderDetails.amount}
          currency={orderDetails.currency}
          orderId={orderDetails.orderId}
          keyId={"rzp_test_rx9aoOCLKV5Qmg"}
          keySecret={"3qLjhEUS5xAtlBxg6lZA1dS2"}
          setDisplayRazorpay={setDisplayRazorpay}
          id={id}
        />
      ) : null}
    </div>
  );
}

export default RazorPayment;
