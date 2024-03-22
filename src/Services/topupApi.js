import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const topupApi = createApi({
  reducerPath: "topupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["userTopup", "adminUser", "autoTrade","autoTradeFriendly"], // automatic-data fetching
  endpoints: (builder) => ({
    //admin
    addTopUp: builder.mutation({
      query: (body) => ({
        url: "/private/api/make_topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    createROIAdmin: builder.mutation({
      query: (body) => ({
        url: "/private/api/create_investment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    // user
    autoTradeUpgrade: builder.mutation({
      query: (body) => ({
        url: "/secure/api/auto_trade_topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["autoTrade"],
    }),
    autoTradeFriendlyTopup: builder.mutation({
      query: (body) => ({
        url: "/secure/api/auto_trade_friendly_topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["autoTradeFriendly"],
    }),
    getAutoTradeUpgradeHistory: builder.query({
      query: () => ({
        url: "/secure/api/get_auto_trade_upgrade_history",
        method: "GET",
      }),
      providesTags: ["autoTrade"],
    }),
    getAutoTradeReferralIncome: builder.query({
      query: () => ({
        url: "/secure/api/get_auto_trade_referral_income",
        method: "GET",
      }),
      providesTags: ["autoTrade"],
    }),
    getAutoTradeIncome: builder.query({
      query: () => ({
        url: "/secure/api/get_auto_trade_roi_history",
        method: "GET",
      }),
      providesTags: ["autoTrade"],
    }),
    getAutoTradeUpgradeFriendlyHistory: builder.query({
      query: () => ({
        url: "/secure/api/get_auto_trade_upgrade_friendly_history",
        method: "GET",
      }),
      providesTags: ["autoTradeFriendly"],
    }),
  }),
});

export const {
  useAddTopUpMutation,
  useCreateROIAdminMutation,
  // User
  useAutoTradeUpgradeMutation,
  useGetAutoTradeUpgradeHistoryQuery,
  useGetAutoTradeReferralIncomeQuery,
  useGetAutoTradeIncomeQuery,
  useAutoTradeFriendlyTopupMutation,
  useGetAutoTradeUpgradeFriendlyHistoryQuery
} = topupApi;
