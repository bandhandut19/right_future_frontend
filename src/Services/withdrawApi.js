import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const withdrawApi = createApi({
  reducerPath: "withdrawApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"))
      return headers;
    },
  }),
  tagTypes: ["adminWithdraw", "userWithdraw","autoTradeWithdraw"], // automatic-data fetching
  endpoints: (builder) => ({
    // admin
    allWithdrawHistory: builder.query({
      query: () => "/private/api/all_withdraw_history",
      providesTags: ["adminWithdraw"], // automatic-data fetching
    }),
    allAutoTradeWithdrawHistory: builder.query({
      query: () => "/private/api/auto_trade_withdraw_requests",
      providesTags: ["autoTradeWithdraw"], // automatic-data fetching
    }),
    editAutoTradeWithdrawStatus: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_auto_trade_withdraw_status",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["autoTradeWithdraw"],
    }),
    editWithdrawStatus: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_withdraw_status",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["adminWithdraw"],
    }),
    completedWithdrawHistory: builder.query({
      query: () => "/private/api/success_withdraw_history",
      providesTags: ["adminWithdraw"], // automatic-data fetching
    }),
    canceledWithdrawHistory: builder.query({
      query: () => "/private/api/reject_withdraw_history",
      providesTags: ["adminWithdraw"], // automatic-data fetching
    }),

    // user
    // getWithdrawHistory: builder.query({
    //   query: () => `/secure/api/withdraw_history`,
    //   providesTags: ["userWithdraw"], // automatic-data fetching
    // }),
    // addWithdrawFunds: builder.mutation({
    //   // user register
    //   query: (body) => ({
    //     url: "/secure/api/withdraw",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["userWithdraw"], // automatic-data fetching
    // }),
    
  }),
});

export const {
    useAllWithdrawHistoryQuery,
    useCompletedWithdrawHistoryQuery,
    useCanceledWithdrawHistoryQuery,
    // useGetWithdrawHistoryQuery,
    // useAddWithdrawFundsMutation,
    useEditWithdrawStatusMutation,
    useAllAutoTradeWithdrawHistoryQuery,
    useEditAutoTradeWithdrawStatusMutation
} = withdrawApi;
