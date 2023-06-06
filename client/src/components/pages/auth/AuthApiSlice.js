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
            onQueryStarted: async(arg, { dispatch, getState, extra }) => {
                // Invoke the default behavior of the login mutation
                await extra.baseQuery(arg);

                // Extract the response from the login mutation
                const { data } = arg.response;

                // Check if the login was successful and the token exists in the response
                if (arg.response.ok && data && data.token) {
                    // Store the token in the cookies or any desired storage mechanism
                    document.cookie = `auth-token=${data.token}; path=/`;
                }
            },
        }),
    }),
});

export const { useLoginMutation } = AuthApiSlice;