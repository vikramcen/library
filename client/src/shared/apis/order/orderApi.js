import { apiSlice } from '../api/apiSlice';

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `/api/orders`,
      providesTags: ['getOrders'],
    }),
    getOrderById: builder.query({
      query: (id) => `/api/orders/get-by-id/${id}`,
    }),
    getOrdersByUser: builder.query({
      query: () => `/api/orders/by-user`,
      providesTags: ['getOrders'],
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/api/orders`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['getOrders'],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/api/orders/update-status/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['getOrders'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByUserQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
  useGetOrderByIdQuery,
} = orderApi;
