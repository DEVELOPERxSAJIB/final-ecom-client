import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "./categoryApiSlice";

const categorySlice = createSlice({
  initialState: {
    categories: [],
    loader: false,
    message: null,
    error: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
     .addCase(getAllCategory.pending, (state) => {
        state.loader = true;
      })
     .addCase(getAllCategory.fulfilled, (state, actions) => {
        state.loader = false;
        state.categories = actions.payload.payload.category;
        state.message = null;
      })
     .addCase(getAllCategory.rejected, (state, actions) => {
        state.loader = false;
        state.error = actions.error.message;
      });
  }

  
});

// export actions
export const { setMessageEmpty } = categorySlice.actions;

// export reducer
export default categorySlice.reducer;
