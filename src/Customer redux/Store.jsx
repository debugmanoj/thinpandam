import { configureStore } from "@reduxjs/toolkit";
import customerUserList from "./CustomerList";
export default configureStore({
    reducer: {
      CustomerList:customerUserList
    },
  })