import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// get all category
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/category`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Create Category
export const createCategory = createAsyncThunk("category/createCategory", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/category`, data, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Edit Category
export const editCategory = createAsyncThunk("category/editCategory", async (data) => {
  try {
    const response = await axios.put(`${baseUrl}/category/${data.id}`, data.data, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Delete Category
export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/category/${id}`, {
      withCredentials: true,
    });
    return response.data;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
});