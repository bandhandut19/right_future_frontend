import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const fundTransferApi = createApi({
  reducerPath: "fundTransferApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("rf_token"));
      return headers;
    },
  }),
  tagTypes: ["adminFundTransfer", "userFundTransfer"], // automatic-data fetching
  endpoints: (builder) => ({
    // admin
    allFundTransferHistoryAdmin: builder.query({
      query: () => "/private/api/fund_transfer_report",
      providesTags: ["adminFundTransfer"], // automatic-data fetching
    }),
    fundTransferHistoryAdmin: builder.query({
      query: () => "/private/api/admin_fundtransfer",
      providesTags: ["adminFundTransfer"], // automatic-data fetching
    }),
  }),
});

export const { useAllFundTransferHistoryAdminQuery,useFundTransferHistoryAdminQuery } = fundTransferApi;
