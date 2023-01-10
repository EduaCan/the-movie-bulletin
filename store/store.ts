import { configureStore } from '@reduxjs/toolkit'
import  popularMoviesReducer  from '../redux/movieSlice'
// ...

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch