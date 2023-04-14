import { apiSlice } from '../api/apiSlice';

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/api/contacts',
      providesTags: ['getContacts'],
    }),

    sendMessage: builder.mutation({
      query: (data) => ({
        url: `/api/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['getContacts'],
    }),
  }),
});

export const { useSendMessageMutation, useGetContactsQuery } = contactApi;
