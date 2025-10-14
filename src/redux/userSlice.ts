import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskType = 'Stress' | 'Joy' | 'Energy';

export interface Task {
  id: string;
  label: string;
  status: TaskType;
  score: number;
  date?: string;
  completed: boolean;
  dueDate?: string;
  notes?: string;
  createdAt: string;
}

export interface DailyTask {
  id: string;
  label: string;
  description: string;
  completed: boolean;
  isDailyTask: boolean;
}

interface UserState {
  onBoarding: boolean;
}

const initialState: UserState = {
  onBoarding: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOnBoarding: (state, action: PayloadAction<boolean>) => {
      state.onBoarding = action.payload;
    },
  },
});

export const { setOnBoarding } = userSlice.actions;

export default userSlice.reducer;
