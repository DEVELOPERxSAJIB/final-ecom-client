import { createSlice } from "@reduxjs/toolkit";
import { createBrand, getAllBrand } from "./brandApiSlice";

const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
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
      .addCase(getAllBrand.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllBrand.fulfilled, (state, actions) => {
        state.loader = false;
        state.message = null;
        state.brands = (actions.payload.payload.brands)
      })
      .addCase(getAllBrand.rejected, (state, actions) => {
        state.loader = false;
        state.error = actions.error.message;
      })
      .addCase(createBrand.pending, (state) => {
        state.loader = true;
      })
      .addCase(createBrand.fulfilled, (state, actions) => {
        state.loader = false;
        state.message = actions.payload.message;
        state.brands = [...state.brands, actions.payload.payload.brand];
      })
      .addCase(createBrand.rejected, (state, actions) => {
        state.loader = false;
        state.error = actions.error.message;
      })
    //   .addCase(orderDetailsByAdmin.pending, (state) => {
    //     state.loader = true;
    //   })
    //   .addCase(orderDetailsByAdmin.fulfilled, (state, actions) => {
    //     state.loader = false;
    //     state.orderDetails = actions.payload.payload.order;
    //   })
    //   .addCase(orderDetailsByAdmin.rejected, (state, actions) => {
    //     state.loader = false;
    //     state.error = actions.error.message;
    //   })
    //   .addCase(updateOrderByAdmin.pending, (state) => {
    //     state.loader = true;
    //   })
    //   .addCase(updateOrderByAdmin.fulfilled, (state, actions) => {
    //     state.loader = false;
    //     state.message = actions.payload.message;
    //     state.orderDetails = actions.payload.payload.order;
    //   })
    //   .addCase(updateOrderByAdmin.rejected, (state, actions) => {
    //     state.loader = false;
    //     state.error = actions.error.message;
    //   })
    //   .addCase(deleteOrderByAdmin.pending, (state) => {
    //     state.loader = true;
    //   })
    //   .addCase(deleteOrderByAdmin.fulfilled, (state, actions) => {
    //     state.loader = false;
    //     state.message = actions.payload.message;
    //     state.orders = state.orders.filter(
    //       (data) => data._id !== actions.payload.payload.order._id
    //     );
    //   })
    //   .addCase(deleteOrderByAdmin.rejected, (state, actions) => {
    //     state.loader = false;
    //     state.error = actions.error.message;
    //   });
  },
});

// export reducers

// export actions
export const { setMessageEmpty } = brandSlice.actions;

// export default
export default brandSlice.reducer;
