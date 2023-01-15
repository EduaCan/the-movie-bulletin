import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { movieReduced } from '../interface/movie'

// Define a type for the slice state
interface moviesState {
  popularMovies: []  | movieReduced[]
  upcomingMovies: [] | movieReduced[]
  favouriteMovies: [] | movieReduced[]
}




// Define the initial state using that type
const initialState: moviesState = {
  popularMovies: [],
  upcomingMovies: [],
  favouriteMovies: []
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
    addFavouriteMovies: (state, action: PayloadAction<movieReduced[]>) => {
      const movieExist = state.favouriteMovies.filter((movie) => movie.id === action.payload.id);
      if(movieExist.length === 0){
        state.favouriteMovies = [...state.favouriteMovies, action.payload];
      }
    }
  },
})

export const { addPopularMovies, addUpcomingMovies, addFavouriteMovies } = apiMoviesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectApiMovies = (state: RootState) => { state.popularMovies, state.upcomingMovies, state.favouriteMovies}

export default apiMoviesSlice.reducer