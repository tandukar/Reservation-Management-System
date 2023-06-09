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
                url: "reservations/get-reservations",
                method: "Get",
            }),
        }),
        getReservation: builder.query({
            query: (id) => ({
                url: `reservations/get-reservation/${id}`,
                method: "Get",
            }),
        }),

        deleteReservation: builder.mutation({
            query: (id) => ({
                url: `reservations/delete-reservation/${id}`,
                method: "DELETE",
            }),
        }),

        updateReservation: builder.mutation({
            query: ({ id, body }) => ({
                url: `reservations/update-reservation/${id}`,
                method: "PATCH",
                body: body,
            }),
        }),
    }),
});

export const {
    useCreateReservationMutation,
    useGetReservationsQuery,
    useDeleteReservationMutation,
    useGetReservationQuery,
    useUpdateReservationMutation
} = ReservationApiSlice;