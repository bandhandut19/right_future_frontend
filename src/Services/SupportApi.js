import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const supportApi = createApi({
  reducerPath: "supportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"))
      return headers;
    },
  }),
  tagTypes: ["adminSupport", "userSupport"], // automatic-data fetching
  endpoints: (builder) => ({
    // admin
    getAllContactUs: builder.query({
      query: () => "/private/api/get_all_contactus",
      providesTags: ["adminSupport"], // automatic-data fetching
    }),
    addNewUpdate: builder.mutation({
      query: (body) => ({
        url: "/private/api/new_update",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminSupport"],
    }),
    getAllSupportMessage: builder.query({
      query: () => "/private/api/get_all_support",
      providesTags: ["adminSupport"], // automatic-data fetching
    }),
    
    // user
    getUpdates: builder.query({
      query: () => `/secure/api/get_updates`,
      providesTags: ["userSupport"], // automatic-data fetching
    }),
    contactUsHistory: builder.query({
      query: () => `/secure/api/get_contactus_history`,
      providesTags: ["userSupport"], // automatic-data fetching
    }),
    ticketHistory: builder.query({
      query: () => `/secure/api/get_support_history`,
      providesTags: ["userSupport"], // automatic-data fetching
    }),
    addContactMessage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/contactus_message",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userSupport"], // automatic-data fetching
    }),
    addSupportTicket: builder.mutation({
      query: (body) => ({
        url: "/secure/api/create_support",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userSupport"], // automatic-data fetching
    }),
    
  }),
});

export const {
    useGetAllContactUsQuery,
    useAddNewUpdateMutation,
    useGetAllSupportMessageQuery,
    useGetUpdatesQuery,
    useContactUsHistoryQuery,
    useTicketHistoryQuery,
    useAddContactMessageMutation,
    useAddSupportTicketMutation,
} = supportApi;
