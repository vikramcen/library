import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayment: builder.query({
      query: () => `/api/payments/single-payment`,
    }),
    updatePayment: builder.mutation({
      query: (data) => ({
        url: `/api/payments`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPaymentQuery, useUpdatePaymentMutation } = paymentApi;
