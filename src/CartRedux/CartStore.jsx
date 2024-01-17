import { configureStore } from "@reduxjs/toolkit";
import CartList from "./CartList";

export default configureStore({
    reducer: {
      Cart:CartList
    },
  })