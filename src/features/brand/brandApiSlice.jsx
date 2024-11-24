import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Get all orders by Admin
export const getAllBrand = createAsyncThunk("brand/getAllBrand", async () => {
  try {
    const response = await axios.get(`${baseUrl}/brand`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Create brand
export const createBrand = createAsyncThunk("brand/createBrand", async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${baseUrl}/brand`, data, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Update brand
export const updateBrand = createAsyncThunk("brand/updateBrand", async (data) => {
  try {
    const response = await axios.put(`${baseUrl}/brand/${data.id}`, data.data, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Update brand
export const deleteBrand = createAsyncThunk("brand/deleteBrand", async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/brand/${id}`, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
