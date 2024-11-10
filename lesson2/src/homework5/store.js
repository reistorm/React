import { createSlice, configureStore } from "@reduxjs/toolkit";

// Создание среза для темы
const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkTheme: false }, // false для светлой темы, true для темной
  reducers: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// Экспортируем действия
export const { toggleTheme } = themeSlice.actions;

// Создаем Redux store
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;