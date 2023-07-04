import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://sgh-reservation.onrender.com',
    // baseUrl: 'http://localhost:5000/',

    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    reducerPath: 'api',
    endpoints: () => ({}),
    tagTypes: ['Users', 'Reservations'],

});