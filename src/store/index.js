import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSLice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSLice.reducer, cart: cartSlice.reducer },
});

export default store;
