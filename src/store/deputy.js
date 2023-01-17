import { createSlice } from "@reduxjs/toolkit";
import httpService from "../services/http.service";

const deputySlice = createSlice({
  name: "deputy",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    deputyRequested: (state) => {
      state.isLoading = true;
    },
    deputyReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    deputyRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: deputyReducer, actions } = deputySlice;
const { deputyRequested, deputyReceived, deputyRequestFailed } = actions;

export const loadDeputyList = () => (dispatch) => {
  const data = httpService.fetchDeputy(); // Здесь почему-то равно undefined
  // console.log(data)
  dispatch(deputyRequested());
  try {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const newData = JSON.parse(data);
        dispatch(deputyReceived(newData));
      });
  } catch (error) {
    dispatch(deputyRequestFailed(error));
  }
};

export const getDeputy = () => (state) => state.deputy.entities;

export default deputyReducer;
