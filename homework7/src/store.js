import { configureStore, createSlice } from '@reduxjs/toolkit';
import { tasks } from './data/tasks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setTasks, setLoading } = tasksSlice.actions;

export const fetchTasks = () => async (dispatch) => {
  dispatch(setLoading());
  setTimeout(() => {
    dispatch(setTasks(tasks));
  }, 1000); // Имитация асинхронной загрузки
};

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;