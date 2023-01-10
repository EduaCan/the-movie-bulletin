import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { movieReduced } from '../interface/movie'

// Define a type for the slice state
interface popularMoviesState {
  value: []  | movieReduced[]
}

// Define the initial state using that type
const initialState: popularMoviesState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'popularMovies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPopularMovies: (state, action: PayloadAction<movieReduced[]>) => {
      state.value = action.payload
    },
  },
})

export const { addPopularMovies } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.popularMovies.value

export default counterSlice.reducer