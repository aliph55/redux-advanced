import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  // totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCard(state, action) {
      const newItem = action.payload;

      const exiatingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!exiatingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exiatingItem.quantity++;
        exiatingItem.totalPrice = exiatingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exiatingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (exiatingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exiatingItem.quantity--;
        exiatingItem.totalPrice = exiatingItem.totalPrice - exiatingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
