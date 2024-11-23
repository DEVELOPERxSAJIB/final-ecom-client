import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// get all category
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    try {
      const response = await axios.get(`${{ baseUrl }}/category`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
