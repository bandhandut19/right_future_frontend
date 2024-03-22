import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const settingApi = createApi({
  reducerPath: "settingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["setting"], // automatic-data fetching
  endpoints: (builder) => ({
    // get popup image
    getPopupImage: builder.query({
      query: () => "/api/get_popup_img",
      providesTags: ["setting"], // automatic-data fetching
    }),
    // admin
    addPopupImage: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_popup_img",
        method: "POST",
        body,
      }),
      invalidatesTags: ["setting"],
    }),
    addYoutubeVideo: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_video_link",
        method: "POST",
        body,
      }),
      invalidatesTags: ["setting"],
    }),
    addPdfLink: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_pdf_link",
        method: "POST",
        body,
      }),
      invalidatesTags: ["setting"],
    }),
    getYoutube: builder.query({
      query: () => "/public/api/get_video_link",
      providesTags: ["setting"], // automatic-data fetching
    }),
    getPdfLink: builder.query({
      query: () => "/public/api/get_pdf_link",
      providesTags: ["setting"], // automatic-data fetching
    }),
    getWebsiteAnalytics: builder.query({
      query: () => "/public/api/website_analytics",
    }),
  }),
});

export const {
  useGetPopupImageQuery,
  useAddPopupImageMutation,
  useAddYoutubeVideoMutation,
  useGetYoutubeQuery,
  useAddPdfLinkMutation,
  useGetPdfLinkQuery,
  useGetWebsiteAnalyticsQuery
} = settingApi;
