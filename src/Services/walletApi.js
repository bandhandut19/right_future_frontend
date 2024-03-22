import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["userWallet","autoTradeWithdraw"], // automatic-data fetching
  endpoints: (builder) => ({
    // user
    getAllWallet: builder.query({
      query: () => `/secure/api/get_wallet`,
      providesTags: ["userWallet","autoTradeWithdraw"], // automatic-data fetching
    }),
    depositHistory: builder.query({
      query: () => `/secure/api/deposite_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    transferHistory: builder.query({
      query: () => `/secure/api/transfer_fund_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    transferFund: builder.mutation({
      query: (body) => ({
        url: "/secure/api/transfer_fund",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    transferFundAdmin: builder.mutation({
      query: (body) => ({
        url: "/private/api/transfer_fund",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    addDepositFund: builder.mutation({
      query: (body) => ({
        url: "/secure/api/deposite",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    getDepositHistory: builder.query({
      query: () => "/secure/api/deposite_history",
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getFundReceivingHistory: builder.query({
      query: () => "/secure/api/getFundReceivingHistory",
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    topupHistory: builder.query({
      query: () => `/secure/api/topup_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    topupApiPackage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/make_topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    userTopupApiPackage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/user_activation",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    autopoolTopupApiPackage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/make_autopool_topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    getAccessAutopool: builder.query({
      query: () => "/secure/api/get_access_autopool",
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getCurrentAutoPool: builder.query({
      query: () => "/secure/api/getcurrentautopool",
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getAutoPoolHistory: builder.query({
      query: () => `/secure/api/autopool_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getAutoPoolUpdateHistoryTwo: builder.query({
      query: () => `/secure/api/getautopool_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getAutoPoolUpdateHistory: builder.query({
      query: () => `/secure/api/getautopool_update_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getTreeAutoPool: builder.query({
      query: () => `/secure/api/gettreeautopool`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getAutoPoolChildData: builder.query({
      query: () => `/secure/api/getautopool_child_data`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    createROI: builder.mutation({
      query: (body) => ({
        url: "/secure/api/create_investment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    getWithdrawHistory: builder.query({
      query: () => `/secure/api/withdraw_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    addWithdrawFunds: builder.mutation({
      // user register
      query: (body) => ({
        url: "/secure/api/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    addAutoTradeWithdrawFunds: builder.mutation({
      query: (body) => ({
        url: "/secure/api/auto_trade_withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["autoTradeWithdraw"], // automatic-data fetching
    }),
    getAutoTradeWithdrawHistory: builder.query({
      query: () => `/secure/api/auto_trade_withdraw_history`,
      providesTags: ["autoTradeWithdraw"], // automatic-data fetching
    }),
    addBoosterTopup: builder.mutation({
      // user register
      query: (body) => ({
        url: "/secure/api/enter_booster",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    getCurrentBoostAmount: builder.query({
      query: () => `/secure/api/get_current_boost_amount`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getBoosterUpgradeHistory: builder.query({
      query: () => `/secure/api/booster_upgrade_history`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    addBonanzaTransfer: builder.mutation({
      query: (body) => ({
        url: "/private/api/send_reward",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
    getRewardTransferHistoryAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/reward_income_data`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    getUserTopUpHistory: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/api/getUserTopUpHistory`,
      providesTags: ["userWallet"], // automatic-data fetching
    }),
    addEnterDefaultAutopool: builder.mutation({
      query: (body) => ({
        url: "/secure/api/enter_default_autopool",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userWallet"], // automatic-data fetching
    }),
  }),
});

export const {
  useGetWithdrawHistoryQuery,
  useAddWithdrawFundsMutation,
  useTopupHistoryQuery,
  useTopupApiPackageMutation,
  useGetAccessAutopoolQuery,
  useUserTopupApiPackageMutation,
  useAutopoolTopupApiPackageMutation,
  useGetCurrentAutoPoolQuery,
  useGetAutoPoolHistoryQuery,
  useAddEnterDefaultAutopoolMutation,
  useGetAutoPoolUpdateHistoryQuery,
  useGetTreeAutoPoolQuery,
  useGetAutoPoolChildDataQuery,
  useAddDepositFundMutation,
  useGetDepositHistoryQuery,
  useGetFundReceivingHistoryQuery,
  useGetAllWalletQuery,
  useDepositHistoryQuery,
  useTransferHistoryQuery,
  useTransferFundMutation,
  useTransferFundAdminMutation,
  useAddBoosterTopupMutation,
  useGetCurrentBoostAmountQuery,
  useGetBoosterUpgradeHistoryQuery,
  useGetAutoPoolUpdateHistoryTwoQuery,
  useCreateROIMutation,
  useAddBonanzaTransferMutation,
  useGetRewardTransferHistoryAdminQuery,
  useGetUserTopUpHistoryQuery,
  useAddAutoTradeWithdrawFundsMutation,
  useGetAutoTradeWithdrawHistoryQuery
} = walletApi;
