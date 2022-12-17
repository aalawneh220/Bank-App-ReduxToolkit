import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initState = {
  movies: [],
  isloading: false,
};

//create thunk
export const fetchMovies = createAsyncThunk(
  "ApiMovies/fetchMovie",
  async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      //return promise (fullfiled/pending)
      return response.data;
    } catch (err) {
      console.log(err.me);
    }
  }
);

const ApiSlice = createSlice({
  name: "ApiMovies",
  initialState: initState,
  //   reducers: {
  //     saveData: (state, action) => {
  //       state.push(action.payload);
  //     },
  //   },

  //can use async function
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies.push(action.payload);
    },
  },
});

export const { saveData } = ApiSlice.actions;
export default ApiSlice.reducer;
