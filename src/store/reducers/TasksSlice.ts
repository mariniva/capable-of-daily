import { Task } from "../../types/Types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TasksState {
  weekDifference: number;
  tasks: Task[];
}

const initialState: TasksState = {
  weekDifference: 0,
  tasks: [],
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setWeekDifference: (
      state,
      action: PayloadAction<"before" | "next" | "today">
    ) => {
      if (action.payload === "before") {
        state.weekDifference -= 1;
      } else if (action.payload === "next") {
        state.weekDifference += 1;
      } else if (action.payload === "today") {
        state.weekDifference = 0;
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      if (state.tasks.some((task) => task.id === action.payload.id)) {
        state.tasks.forEach((task) => {
          if (task.id === action.payload.id) {
            task.name = action.payload.name;
            task.isDone = false;
          }
        });
      } else {
        state.tasks.push(action.payload);
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setDone: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone;
        }
      });
    },
  },
});

export const { setWeekDifference, addTask, removeTask, setDone } =
  TasksSlice.actions;
export const selectDate = (state: RootState) => state.tasks;
export default TasksSlice.reducer;
