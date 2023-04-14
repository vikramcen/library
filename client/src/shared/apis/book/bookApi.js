import { apiSlice } from '../api/apiSlice';

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => {
        const { category, keyword } = params || {};
        let url = '/api/books';
        const query = new URLSearchParams();
        if (category) query.append('category', category);
        if (keyword) query.append('keyword', keyword);
        if (query.toString()) url += `?${query.toString()}`;
        return url;
      },
      providesTags: ['getBooks'],
    }),
    getBook: builder.query({
      query: (id) => `/api/books/${id}`,
    }),
    getBooksByCategory: builder.query({
      query: (category) => `/api/books?category=${category}`,
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: `/api/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['getBooks', 'getCategories'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['getBooks', 'getCategories'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getBooks'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
