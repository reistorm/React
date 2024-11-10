import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme); // Обновляем путь к состоянию

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#333" : "#FFF",
        color: isDarkTheme ? "#FFF" : "#333",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
      }}
    >
      
      <button onClick={handleThemeToggle}>
        Переключить на {isDarkTheme ? "светлую" : "темную"} тему
      </button>
    </div>
  );
};

export default ThemeToggle;