import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/api/users`,
    }),
    getUser: builder.query({
      query: () => `/api/users/single-user`,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/api/users`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } =
  userApi;
