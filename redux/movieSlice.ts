import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { movieReduced } from '../interface/movie'

// Define a type for the slice state
interface moviesState {
  popularMovies: []  | movieReduced[]
  upcomingMovies: [] | movieReduced[]
}

// Define the initial state using that type
const initialState: moviesState = {
  popularMovies: [],
  upcomingMovies: [],
}

export const apiMoviesSlice = createSlice({
  name: 'apiMovies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPopularMovies: (state, action: PayloadAction<movieReduced[]>) => {
      state.popularMovies = action.payload
    },
    addUpcomingMovies: (state, action: PayloadAction<movieReduced[]>) => {
      state.upcomingMovies = action.payload
    },
  },
})

export const { addPopularMovies, addUpcomingMovies } = apiMoviesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectApiMovies = (state: moviesState) => { state.popularMovies, state.upcomingMovies}

export default apiMoviesSlice.reducer