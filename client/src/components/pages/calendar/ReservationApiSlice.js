import { apiSlice } from "../../app/apiSlice";

export const ReservationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createReservation: builder.mutation({
            query: (body) => ({
                url: "reservations/create-reservation",
                method: "Post",
                body: body,
            }),
        }),
        getReservations: builder.query({
            query: () => ({
                url: "reservations/get-reservation",
                method: "Get",

            }),

        }),
    }),
});

export const { useCreateReservationMutation, useGetReservationsQuery } = ReservationApiSlice;