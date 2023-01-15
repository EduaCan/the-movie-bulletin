
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { movieReduced } from '../interface/movie'

// Define a type for the slice state
interface favouritesState {
  favouriteMovies: []  | movieReduced[]
}

// Define the initial state using that type
const initialState: favouritesState = {
  favouriteMovies: []
}

export const favouriteMoviesSlice = createSlice({
    name: 'favouriteMovies',
    initialState,
    reducers: {
      addFavouriteMovies: (state, action: PayloadAction<movieReduced>) => {
        const movieExist = state.favouriteMovies.findIndex((movie: movieReduced) => movie.id === action.payload.id);
        if(movieExist !== -1){
           state.favouriteMovies = [...state.favouriteMovies.slice(0, movieExist), ...state.favouriteMovies.slice(movieExist + 1)];
        }else{
           state.favouriteMovies = [...state.favouriteMovies, action.payload];
        }
    },
    },
  })

      export const { addFavouriteMovies } = favouriteMoviesSlice.actions

      export const selectfavouriteMovies = (state: RootState) => { state.favouriteMovies}
      
      export default favouriteMoviesSlice.reducer