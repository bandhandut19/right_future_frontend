import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const depositeApi = createApi({
  reducerPath: "depositeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["adminDeposite", "userDeposit"], // automatic-data fetching
  endpoints: (builder) => ({
    // admin
    allDepositeHistory: builder.query({
      query: () => "/private/api/all_deposite_history",
      providesTags: ["adminDeposite"], // automatic-data fetching
    }),
    editDepositStatus: builder.mutation({
      query: (body) => ({
        url: "/private/api/change_deposite_status",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["adminDeposite"],
    }),
    completedDepositeHistory: builder.query({
      query: () => "/private/api/success_deposite_history",
      providesTags: ["adminDeposite"], // automatic-data fetching
    }),
    canceledDepositeHistory: builder.query({
      query: () => "/private/api/reject_deposite_history",
      providesTags: ["adminDeposite"], // automatic-data fetching
    }),

    // // user
    // addDepositFund: builder.mutation({
    //   query: (body) => ({
    //     url: "/secure/api/deposite",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["userDeposit"], // automatic-data fetching
    // }),
    // getDepositHistory: builder.query({
    //   query: () => "/secure/api/deposite_history",
    //   providesTags: ["userDeposit"], // automatic-data fetching
    // }),
  }),
});

export const {
  useAllDepositeHistoryQuery,
  useCompletedDepositeHistoryQuery,
  useCanceledDepositeHistoryQuery,
  // useAddDepositFundMutation,
  // useGetDepositHistoryQuery,
  useEditDepositStatusMutation,
} = depositeApi;
