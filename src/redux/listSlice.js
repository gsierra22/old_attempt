import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [{ task: "rugby", completed: false }],
  reducers: {
    list: (state, action) => {
      const newListItem = {
        task: action.payload.task,
        completed: false,
      };
      state.push(newListItem);
    },
  },
});

export const { addList } = listSlice.actions;

export default listSlice.reducer;
