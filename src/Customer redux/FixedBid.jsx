import { createSlice } from "@reduxjs/toolkit";

export const fixedBidSlice = createSlice({
  name: "fixedBid",
  initialState: {
    delivery: 0,
    customer: 0,
  },
  reducers: {
    handleDeliveryBid: (state, action) => {
      return {
        ...state,
        deliveryBid: action.payload.deliveryBid,
        customerBid: action.payload.customerBid,
      };
    },
    handleDeliveryInitialValue: (state, action) => {
      return {
        ...state,
        delivery: action.payload.bidamount,
      };
    },
    handleCustomerBidInitialValue: (state, action) => {
      return {
        ...state,
        customer: action.payload.deliveryBid,
      };
    },
    updateDeliveryBid: (state, action) => {
      return {
        ...state,
        customer: action.payload.deliveryBid,
      };
    },
    updateCustomerBid: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        delivery: action.payload.CustomerBid,
      };
    },
  },
});

export const {
  handleDeliveryBid,
  handleCustomerBidInitialValue,
  handleDeliveryInitialValue,
  updateDeliveryBid,
  updateCustomerBid,
} = fixedBidSlice.actions;
export default fixedBidSlice.reducer;
