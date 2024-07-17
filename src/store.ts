import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form_context",
  initialState: {
    isActive: false,
  },
  reducers: {
    setIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { setIsActive } = formSlice.actions;
export const store = configureStore({
  reducer: {
    formReducer: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
