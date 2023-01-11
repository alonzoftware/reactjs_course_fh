// import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import { buildQueryLifecycleHandler } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/queryLifecycle';
// import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
// import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
// import { BaseQueryApi, BaseQueryFn, createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const todosApi = createApi({
    reducerPath: 'todos',

    // baseQuery: function (args: any, api: BaseQueryApi, extraOptions: {}): MaybePromise<QueryReturnValue<unknown, unknown, {}>> {
    //     throw new Error('Function not implemented.');
    // },

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    // endpoints: function (build: EndpointBuilder<BaseQueryFn<any, unknown, unknown, {}, {}>, never, 'api'>): EndpointDefinitions {
    //     throw new Error('Function not implemented.');
    // }

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })
})

export const { useGetTodosQuery } = todosApi;