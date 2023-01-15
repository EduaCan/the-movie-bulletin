
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { movieReduced } from '../interface/movie'

// Define a type for the slice state
interface favouritesState {
  favouriteMovies: any
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
         const movieExist = state.favouriteMovies.filter((movie: { id: any }) => movie.id === action.payload.id);
         if(movieExist.length === 0){
           state.favouriteMovies = [...state.favouriteMovies, action.payload];
         }
       }
    },
  })

      export const { addFavouriteMovies } = favouriteMoviesSlice.actions

      export const selectfavouriteMovies = (state: RootState) => { state.favouriteMovies}
      
      export default favouriteMoviesSlice.reducer