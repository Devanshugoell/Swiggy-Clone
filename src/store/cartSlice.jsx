import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      // 🧠 Save updated cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload?.card?.info?.id;

      if (itemIdToRemove) {
        state.items = state.items.filter(
          (item) => item?.card?.info?.id !== itemIdToRemove
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.card.info.id !== itemId
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart, decreaseItem, increaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
