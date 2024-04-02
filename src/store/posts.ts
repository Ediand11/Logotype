import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://cloud.codesupply.co/endpoint/react/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `data.json`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
