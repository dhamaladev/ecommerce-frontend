import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../api/Api";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/products/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => "",
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `${id}`,
    }),
    filterProductsByTitle: builder.query<any, string>({
      query: (title: string) => `search/${title}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useFilterProductsByTitleQuery } = productApi;
