import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all orders by Admin
export const getAllBanner = createAsyncThunk("banner/getAllBanner", async () => {
  try {
    const response = await axios.get(`${baseUrl}/banner`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Create banner
export const createBanner = createAsyncThunk("banner/createBanner", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/banner`, data.data, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});


// Delete banner
export const deleteBanner = createAsyncThunk("banner/deleteBanner", async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/banner/${id}`, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
