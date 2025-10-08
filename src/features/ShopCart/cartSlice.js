import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempItems: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    upadateTempQuantity(state, action) {
      const tempItem = state.tempItems.find(
        (item) => item.id === action.payload.id
      );
      tempItem.quantity = action.payload.quantity;
      const cartItem = state.items.find(
        (item)=>item.id === action.payload.id
      );
      cartItem.quantity = action.payload.quantity
      state.totalPrice = state.items.reduce(
        (sum, item)=> sum + item.price * item.quantity, 0)
    },
    
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  upadateTempQuantity,
  applyTempUpdate,
} = cartSlice.actions;
export default cartSlice.reducer;