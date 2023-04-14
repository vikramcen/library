import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/api/categories`,
      providesTags: ["getCategories"],
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/api/categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getCategories"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/categories/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getCategories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/api/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getCategories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
