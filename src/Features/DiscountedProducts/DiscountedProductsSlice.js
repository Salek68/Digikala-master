import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDiscountedProducts = createAsyncThunk(
  "fetchDiscountedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://digikala-data.vercel.app/DiscountedProducts"
      );
      return res.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const discountedProducts = createSlice({
  name: "discountedProducts",
  initialState,
  extraReducers: {
    [fetchDiscountedProducts.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchDiscountedProducts.fulfilled]: (state, action) => {
      return { ...state, loading: false, products: action.payload };
    },
    [fetchDiscountedProducts.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.payload.message };
    },
  },
});

export default discountedProducts.reducer;
