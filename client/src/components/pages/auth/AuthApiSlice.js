import { apiSlice } from "../../app/apiSlice";

export const AuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: "/users/register",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/users/auth/login",
                method: "POST",
                body,
            }),

        }),
    }),
});

export const { useLoginMutation } = AuthApiSlice;