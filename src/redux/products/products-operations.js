import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://65537d855449cfda0f2ec6d3.mockapi.io/api";

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const queryURL = `/products`;
      const response = await axios.get(queryURL);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getProductById = createAsyncThunk(
  "products/getProductById",
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/products/${credentials}`;
      const response = await axios.get(queryURL);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addProduct = createAsyncThunk(
  "products/addProduct",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/products", credentials);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/products/${credentials}`;
      const response = await axios.delete(queryURL);
      Notiflix.Notify.success(`Товар був успішно видалений!`);
      return credentials;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/products/${credentials.id}`;
      const response = await axios.put(queryURL, credentials);
      Notiflix.Notify.success(`Інформацію про товар було оновлено!`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productOperations = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};

export default productOperations;
