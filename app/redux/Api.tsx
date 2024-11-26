import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const LOCAL_IP = 'https://digi-med-backend.onrender.com';

export const shatayu = createApi({
  reducerPath: 'shatayu',
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_IP,
    prepareHeaders: async (headers) => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query:( { email, password }) => ({
        url: '/doctor/login_doctor',
        method: 'POST',
        body: { email, password  },
      }),
    }),
    getAllPatientData: builder.query({
      query: () => ({
        url: '/doctor/get_active_kiosks_list_of_organization?page=1&limit=20',
        method: 'GET',
      }),
    }),
    viewReport: builder.query({
      query: (id) => ({
        url: `/patient/getPatientsHealthPassportById/${id}`,
        method: 'GET',
      }),
    }),
    getReportData: builder.query({
      query: (id) => ({
        url: `/patient/getPatientsHealthPassportById/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAllPatientDataQuery, useViewReportQuery, useGetReportDataQuery } = shatayu;
