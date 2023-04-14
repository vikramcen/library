import { apiSlice } from '@apis/api/apiSlice';
import authSlice from '@apis/auth/authSlice';
import cartSlice from '@apis/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
