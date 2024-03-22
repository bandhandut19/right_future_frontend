import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: "cors",
    prepareHeaders: (headers) => {
      // console.log(getLocalStorage("rf_token"))
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["User", "adminUser", "Validate","autoTrade"], // automatic-data fetching
  endpoints: (builder) => ({
    getLoginUser: builder.query({
      query: () => "/api/get_user",
      providesTags: ["User"], // automatic-data fetching
    }),
    getAutopoolOneStatus: builder.query({
      query: () => "/secure/api/autopool_one_status",
      providesTags: ["User"], // automatic-data fetching
    }),
    // for auth user
    addUser: builder.mutation({
      // user register
      query: (body) => ({
        url: "/public/api/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    addLogin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/public/api/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    addForgotPass: builder.mutation({
      query: (body) => ({
        url: "/public/api/forgot_password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    addOtp: builder.mutation({
      query: (body) => ({
        url: "/public/api/send_otp",
        method: "POST",
        body: {
          user_id: body.user_id,
          password: body.password,
          email: body.email,
          new_email: body.new_email,
          mobile: body.mobile,
          current_password: body.current_password,
          current_trx_password: body.current_trx_password,
          trx_address: body.trx_address,
          trx_password: body.trx_password,
        },
      }),
      // invalidatesTags: ["User"], // automatic-data fetching
    }),
    addResetPass: builder.mutation({
      query: ({ token, password }) => ({
        url: `/public/api/reset_password/${token}`,
        method: "POST",
        body: { password: password },
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    getValidateSponsorName: builder.query({
      query: (user_id) => `/public/api/get_sponsor/${user_id}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    getValidateSponsorId: builder.query({
      query: (sponsor_id) => `/public/api/check_sponsor_id/${sponsor_id}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    getValidateEmail: builder.query({
      query: (email) => `/public/api/check_email/${email}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    getValidateMobile: builder.query({
      query: (mobile) => `/public/api/check_mobile/${mobile}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    // get all team member list
    levelTeamList: builder.query({
      // query: (user_id) => `/secure/api/level_team/${user_id}`,
      query: () => `/secure/api/level_team/`,
      providesTags: ["User"], // automatic-data fetching
    }),
    getMonthlyDirectMember: builder.query({
      query: () => `/secure/api/monthly_direct_member`,
      providesTags: ["User"], // automatic-data fetching
    }),

    // for crud
    editUser: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_user_info",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editPassword: builder.mutation({
      query: (body) => ({
        url: "/secure/api/change_password",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editEmail: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_email",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editTrxPassword: builder.mutation({
      query: (body) => ({
        url: "/secure/api/change_trx_password",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editTrxAddress: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_trx_address",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editImage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_profile_pic",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // admin
    getAllUser: builder.query({
      query: () => "/private/api/user_analytics",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    allUserList: builder.query({
      query: () => "/private/api/all_user_list",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    editUserList: builder.mutation({
      query: (body) => ({
        url: "/private/api/edit_user",
        method: "PUT",
        body: { data: body },
      }),
      invalidatesTags: ["adminUser"],
    }),
    deleteUserList: builder.mutation({
      query: (body) => ({
        url: "/private/api/delete_user",
        method: "PUT",
        body: { user_id: body.user_id },
      }),
      invalidatesTags: ["adminUser"],
    }),
    editUserStatus: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_user_status",
        method: "PUT",
        body: { user_id: body.user_id },
      }),
      invalidatesTags: ["adminUser"],
    }),
    editAdminEmail: builder.mutation({
      query: (body) => ({
        url: "/private/api/update_email",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    editAdminPassword: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_password",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    activeUserList: builder.query({
      query: () => "/private/api/active_user_list",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    blockUserList: builder.query({
      query: () => "/private/api/block_user_list",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    addAutoPoolController: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_autopool_status",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    getAutopoolStatus: builder.query({
      query: () => "/private/api/get_autopool_setting",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    addTeamStatistics: builder.mutation({
      query: (body) => ({
        url: "/private/api/team_statistics",
        method: "POST",
        body,
      }),
      invalidatesTags: ["adminUser"],
    }),
    // auto trade
    getAutoTradeUsers: builder.query({
      query: () => "/private/api/auto_trade_users",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    getAutoTradeAllUpgradeHistory: builder.query({
      query: () => "/private/api/auto_trade_upgrade_history",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
    getAutoTradeAllRoiIncomeHistory: builder.query({
      query: () => "/private/api/auto_trade_roi_income_history",
      providesTags: ["adminUser"], // automatic-data fetching
    }),
  }),
});

export const {
  useGetAutoTradeUsersQuery,
  useGetAutoTradeAllRoiIncomeHistoryQuery,
  useGetAutoTradeAllUpgradeHistoryQuery,
  useGetLoginUserQuery,
  useGetAutopoolOneStatusQuery,
  useGetValidateSponsorNameQuery,
  useGetValidateSponsorIdQuery,
  useGetValidateEmailQuery,
  useGetValidateMobileQuery,
  useAddUserMutation,
  useAddLoginMutation,
  useAddForgotPassMutation,
  useAddResetPassMutation,
  useEditUserMutation,
  useEditPasswordMutation,
  useEditTrxPasswordMutation,
  useEditTrxAddressMutation,
  useEditEmailMutation,
  useAddOtpMutation,
  useLevelTeamListQuery,
  useEditImageMutation,
  useGetAllUserQuery,
  useAllUserListQuery,
  useActiveUserListQuery,
  useGetMonthlyDirectMemberQuery,
  useBlockUserListQuery,
  useEditUserListMutation,
  useEditUserStatusMutation,
  useDeleteUserListMutation,
  useEditAdminEmailMutation,
  useEditAdminPasswordMutation,
  useAddAutoPoolControllerMutation,
  useGetAutopoolStatusQuery,
  useAddTeamStatisticsMutation,
} = userApi;
