// import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import { buildQueryLifecycleHandler } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/queryLifecycle';
// import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
// import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
// import { BaseQueryApi, BaseQueryFn, createApi, EndpointDefinitions, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface iTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
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
        getTodos: builder.query<any, number>({
            query: () => '/todos'
        })
    })
})

export const { useGetTodosQuery } = todosApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = 'xxxxxxx';

// export const postsApi = createApi({
//   reducerPath: 'posts',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getPostsByYear: builder.query<any, { start: string; end: string }>({
//       query: (arg) => {
//         const { start, end } = arg;
//         console.log('arg: ', arg);
//         return {
//           url: 'posts/',
//           params: { start, end },
//         };
//       },
//     }),
//   }),
// });

// export const { useGetPostsByYearQuery } = postsApi;

// import { useGetPostsByYearQuery } from './hooks';

// export default function App() {
//   const { data, error, isLoading } = useGetPostsByYearQuery({ start: '2019', end: '2021' });
//   return <div>app</div>;
// }