import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const earningApi = createApi({
  reducerPath: "earningApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["adminEarning", "user","boosterController"], // automatic-data fetching
  endpoints: (builder) => ({
    // admin
    roiIncomeData: builder.query({
      query: () => "/private/api/roi_income_data",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    levelIncomeData: builder.query({
      query: () => "/private/api/level_income_data",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getAutopoolMembersAdmin: builder.query({
      query: () => "/private/api/autopool_users",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    addTreeAutoPoolAdmin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/private/api/autopool_tree_structure",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    getBoosterIncomeMembersAdmin: builder.query({
      query: () => "/private/api/all_booster_user",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getAllBoosterIncomeIDsAdmin: builder.query({
      query: () => "/private/api/total_booster_user",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getBoosterUpgradeIncome: builder.query({
      query: () => "/private/api/sponsor_booster_income_admin",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    addBoostTreeAutPoolAdmin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/private/api/booster_tree_structure",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    getRoyaltyMembersAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/getroyaltymembers`,
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    addSendRoyaltyMembersMoneyAdmin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/private/api/sendroyaltymembersmoney",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    // user earning
    roiIncomeDataUser: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/get_investment`,
      providesTags: ["user"], // automatic-data fetching
    }),
    levelIncomeDataUser: builder.query({
      // query: (user_id) => `/secure/api/user/level_income/${user_id}`,
      query: () => `/secure/level_income`,
      providesTags: ["user"], // automatic-data fetching
    }),
    rewardIncomeDataUser: builder.query({
      // query: (user_id) => `/secure/api/user/reward_income/${user_id}`,
      query: () => `/secure/api/reward_income`,
      providesTags: ["user"], // automatic-data fetching
    }),
    // graphchart data
    getRoiIncomeDataUserChart: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/roi_income_chart`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getLevelIncomeDataUserChart: builder.query({
      // query: (user_id) => `/secure/api/user/level_income/${user_id}`,
      query: () => `/secure/level_income_chart`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getRewardIncomeDataUserChart: builder.query({
      // query: (user_id) => `/secure/api/user/reward_income/${user_id}`,
      query: () => `/secure/reward_income_chart`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getRoyaltyIncomeHistory: builder.query({
      query: () => "/secure/api/getroyaltyincomehistory",
      providesTags: ["user"], // automatic-data fetching
    }),
    getRoyaltyIncomeHistoryAdmin: builder.query({
      query: () => "/private/api/getroyaltymemberhistory",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getAutoPoolHistoryEarning: builder.query({
      query: () => "/secure/api/getautopool_history",
      providesTags: ["user"], // automatic-data fetching
    }),
    getDirectLevelIncome: builder.query({
      query: () => "/secure/api/direct_level_income",
      providesTags: ["user"], // automatic-data fetching
    }),
    getInDirectLevelIncome: builder.query({
      query: () => "/secure/api/indirec_tlevel_income",
      providesTags: ["user"], // automatic-data fetching
    }),
    getGiftIncomeHistory: builder.query({
      query: () => "/secure/api/gift_income_history",
      providesTags: ["user"], // automatic-data fetching
    }),
    getDirectWithdrawIncome: builder.query({
      query: () => "/secure/api/direct_withdraw_income",
      providesTags: ["user"], // automatic-data fetching
    }),
    getGiftIncomeHistoryAdmin: builder.query({
      query: () => "/private/api/gift_income_history",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getGiftTransferUserListAdmin: builder.query({
      query: () => "/private/api/gift_income_user",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getGiftTransferHistoryAdmin: builder.query({
      query: () => "/private/api/gift_income_history",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getUserTopupHistoryAdmin: builder.query({
      query: () => "/private/api/all_user_activation",
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getIncomeLevelUpdate: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/api/income_level_update`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getIncomeLevelUpdateAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/get_income_level_update`,
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    addSendGiftSingleUserAdmin: builder.mutation({
      query: ({ id }) => ({
        url: `/private/api/send_gift_single_user/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    addSendGiftAllUserAdmin: builder.mutation({
      query: () => ({
        url: `/private/api/send_gift_all_user`,
        method: "POST",
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    getBoosterIncomeHistory: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/api/booster_history`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getIndirectIncomeHistoryAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/indirect_income_data`,
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getDirectIncomeHistoryAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/direct_income_data`,
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getUserActivationIncome: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/api/user_activation_income`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getDirectFundTransferIncome: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/secure/api/direct_fundtransfer_income`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getBonanzaAchievement: builder.query({
      query: () => `/secure/api/getBonanzaAchievement`,
    }),
    getBonanzaPrize: builder.query({
      query: () => `/secure/api/getBonanzaPrize`,
    }),
    getBoosterUpgradeUserIncome: builder.query({
      query: () => `/secure/api/sponsor_booster_income`,
      providesTags: ["user"], // automatic-data fetching
    }),
    getDirectWithdrawIncomeHistoryAdmin: builder.query({
      // query: (user_id) => `/secure/api/user/get_investment/${user_id}`,
      query: () => `/private/api/direct_withdraw_income`,
      providesTags: ["adminEarning"], // automatic-data fetching
    }),
    getSingleBonanzaAchieve: builder.mutation({
      query: (body) => ({
        url: `/private/api/getSingleBonanzaAchieve`,
        method: "POST",
        body: body
      }),
      invalidatesTags: ["adminEarning"], // automatic-data fetching
    }),
    getAllBonanzaPrize: builder.query({
      query: () => `/private/api/getAllBonanzaPrize`,
    }),
    getAllBonanzaAchieverList: builder.query({
      query: () => `/private/api/getAllBonanzaAchieverList`,
    }),
    getBoosterControllUsers: builder.query({
      query: () => `/private/api/booster_eligible_users`,
      providesTags: ["boosterController"], // automatic-data fetching
    }),
    updateBoosterController: builder.mutation({
      query: (body) => ({
        url: `/private/api/booster_controller`,
        method: "PUT",
        body: body
      }),
      invalidatesTags: ["boosterController"], // automatic-data fetching
    }),
  }),
});

export const {
  useRoiIncomeDataQuery,
  useLevelIncomeDataQuery,
  useRoiIncomeDataUserQuery,
  useGetIncomeLevelUpdateQuery,
  useGetDirectWithdrawIncomeQuery,
  useLevelIncomeDataUserQuery,
  useRewardIncomeDataUserQuery,
  useGetLevelIncomeDataUserChartQuery,
  useGetRewardIncomeDataUserChartQuery,
  useGetRoiIncomeDataUserChartQuery,
  useGetRoyaltyMembersAdminQuery,
  useGetRoyaltyIncomeHistoryAdminQuery,
  useGetAutopoolMembersAdminQuery,
  useAddTreeAutoPoolAdminMutation,
  useGetBoosterIncomeMembersAdminQuery,
  useGetAllBoosterIncomeIDsAdminQuery,
  useGetBoosterUpgradeIncomeQuery,
  useGetBoosterUpgradeUserIncomeQuery,
  useAddBoostTreeAutPoolAdminMutation,
  useGetRoyaltyIncomeHistoryQuery,
  useGetAutoPoolHistoryEarningQuery,
  useAddSendRoyaltyMembersMoneyAdminMutation,
  useGetDirectLevelIncomeQuery,
  useGetInDirectLevelIncomeQuery,
  useGetGiftIncomeHistoryQuery,
  useGetGiftIncomeHistoryAdminQuery,
  useGetGiftTransferUserListAdminQuery,
  useGetIncomeLevelUpdateAdminQuery,
  useGetGiftTransferHistoryAdminQuery,
  useGetUserTopupHistoryAdminQuery,
  useAddSendGiftAllUserAdminMutation,
  useAddSendGiftSingleUserAdminMutation,
  useGetBoosterIncomeHistoryQuery,
  useGetIndirectIncomeHistoryAdminQuery,
  useGetDirectIncomeHistoryAdminQuery,
  useGetDirectFundTransferIncomeQuery,
  useGetUserActivationIncomeQuery,
  useGetDirectWithdrawIncomeHistoryAdminQuery,
  useGetBonanzaAchievementQuery,
  useGetBonanzaPrizeQuery,
  useGetSingleBonanzaAchieveMutation,
  useGetAllBonanzaAchieverListQuery,
  useGetAllBonanzaPrizeQuery,
  useGetBoosterControllUsersQuery,
  useUpdateBoosterControllerMutation
} = earningApi;
