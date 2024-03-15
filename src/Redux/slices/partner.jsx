import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partner: [],
  coupon: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    addPartner(state, action) {
      state.isLoading = false;
      state.error = null;
      state.partner = [...action.payload.reverse(), ...state.partner];
    },

    addCoupon(state, action) {
      state.isLoading = false;
      state.error = null;
      state.coupon = [...action.payload.reverse(), ...state.coupon];
    },
  },
});

export default slice.reducer;
export const { addPartner, addCoupon, startLoading, stopLoading } =
  slice.actions;
