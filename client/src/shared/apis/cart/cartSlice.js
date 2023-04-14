import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: {},
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;
      const cart = state;

      if (!cart.items[`${book?._id}-${book?.type}`]) {
        cart.items[`${book?._id}-${book?.type}`] = {
          item: book,
          qty: 1,
          price: book?.price,
          type: book?.type,
        };
        cart.totalQty += 1;
        cart.totalPrice += book?.price;
      } else {
        cart.items[`${book?._id}-${book?.type}`].qty += 1;
        cart.items[`${book?._id}-${book?.type}`].price += book?.price;
        cart.totalQty += 1;
        cart.totalPrice += book?.price;
      }

      // set local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      return cart;
    },
    removeToCart: (state, action) => {
      const itemPrice = state.items[action.payload].price;
      const itemQty = state.items[action.payload].qty;

      delete state.items[action.payload];

      state.totalPrice -= itemPrice;
      state.totalQty -= itemQty;

      // set local storage
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    addCartData: (state, action) => {
      state = action.payload;
      return state;
    },
    removeCart: (state, action) => {
      state = {
        items: {},
        totalQty: 0,
        totalPrice: 0,
      };

      localStorage.removeItem("cart");

      return state;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeToCart, addCartData, removeCart } =
  cartSlice.actions;
