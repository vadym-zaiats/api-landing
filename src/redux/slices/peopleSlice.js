import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "./tokenSlice";

const peopleSlice = createSlice({
  name: "peoples",
  initialState: {
    peoples: [],
    maxRes: 0,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(setPeoples.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setPeoples.fulfilled, (state, action) => {
      state.isLoading = false;
      state.peoples = action.payload;
    });
    builder.addCase(setPeoples.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(setMaxResult.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setMaxResult.fulfilled, (state, action) => {
      state.isLoading = false;
      state.maxRes = action.payload;
    });
    builder.addCase(setMaxResult.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const setPeoples = createAsyncThunk(
  "peoples/setPeoples",
  async ({ page }, { dispatch, rejectWithValue }) => {
    const data = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    ).then((res) => res.json());
    return data.users;
  }
);
export const setMaxResult = createAsyncThunk(
  "peoples/setMaxResult",
  async (_, { dispatch, rejectWithValue }) => {
    const data = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100`
    ).then((res) => res.json());
    return data.users.length;
  }
);

export const postCard = createAsyncThunk(
  "peoples/postCard",
  async (
    { name, email, phone, position, position_id, photo },
    { dispatch, rejectWithValue, getState }
  ) => {
    const state = getState();
    const token = state.tokenSlice.token;
    try {
      const res = await dispatch(setToken());
      console.log("setToken() result:", res);
      try {
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            position,
            position_id,
            photo,
          }),
        })
          .then((res) => {
            if (res.ok) {
              //     renderAdminPage();
              //     return res.text();
            } else {
              //     renderWrongPage();
              //     console.log("Невірний логін або пароль");
            }
          })
          .then((data) => {
            console.log("Server responce:", data);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export default peopleSlice.reducer;
export const {} = peopleSlice.actions;
