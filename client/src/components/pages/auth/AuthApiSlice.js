import { apiSlice } from "../../app/apiSlice";

export const AuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/users/auth/login",
                method: "POST",
                body,
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/users/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterUserMutation } = AuthApiSlice;