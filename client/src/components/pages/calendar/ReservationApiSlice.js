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

        deleteReservation: builder.mutation({
            query: (id) => ({
                url: `reservations/delete-reservation/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useCreateReservationMutation, useGetReservationsQuery, useDeleteReservationMutation } =
ReservationApiSlice;