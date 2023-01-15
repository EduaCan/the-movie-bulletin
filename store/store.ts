
import { configureStore } from '@reduxjs/toolkit'
import  apiMoviesReducer  from '../redux/movieSlice'
import favouriteMoviesReducer from '../redux/favouriteSlice'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';

//redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favouriteMovies']
}

const rootReducer = combineReducers({
  favouriteMovies: favouriteMoviesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
//redux-persist


export const store= configureStore({
  reducer: {
    apiMovies: apiMoviesReducer,
    favouriteMovies: persistedReducer
  },
})




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch