import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './ui/uiSlice'
import { calendarSlice } from './calendar/calendarSlice'
import { authSlice } from './auth/authSlice'
// import { authSlice, uiSlice, calendarSlice } from '.'



export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
        // pokemons: pokemonSlice.reducer,
        // [todosApi.reducerPath]: todosApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch