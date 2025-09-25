// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useAuth } from '../hooks/useAuth';
import config from './config';

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: (headers) => {
      /*
      const { authenticated, user } = useAuth(); // Use the auth context
      if (authenticated) {
        let token = user.auth.token; // Get the token from the context
        // manage token manipulation here
        // If we have a token set in context, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      }
      */
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // build endpoints here
    generateApiKey: builder.mutation({
      query: () => ({
        url: '/generate-api-key',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGenerateApiKeyMutation } = api;

export default api;
