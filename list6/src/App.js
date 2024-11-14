import React from "react";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { FilterProvider } from "./contexts/FilterContext";

const App = () => {
  // При загрузке приложения, пользователь видит три основных компонента:
  // список задач (ToDoList), поле для добавления новой задачи (AddToDo)
  // и фильтр для выбора видимых задач (ToDoFilter)

  // В ToDoList пользователь видит все текущие задачи. Задачи мб отмечены
  // как выполненные или невыполненные. Пользователь м также удалить задачу
  // из списка.

  // В AddToDo пользователь м ввести текст новой задачи и добавить ее в список
  // нажатием кнопки.

  // В ToDoFilter пользователь м фильтровать задачи на три категории: все, выполненные
  // и невыполненные.

  // Все действия пользователя приводят к отправке действий в хранилище Redux через 
  // функции-действия, определенные в файле todoActions.js

  // Редуктор в файле todoReducer.js слушает действия и обновляет состояние 
  // в соответсвии с этими действиями

  // Компоненты реагируют на изменение состояния и обновляют отображение
  // соответствующим образом

  // Контекст фильтра (в файле FilterContext.js) слушает действия и обновляет состояние 
  // в соответствии с этими действиями

  // Компонент высшего порядка withFilter.js оборачивает ToDoList, предоставляя ему
  // функциональность фильтрации задач в соответствии с выбранным фильтром

  // Хранилище Redux создается в файле store.js и передается в компонент Provider 
  // в файле index.js

  return (
    <FilterProvider>
      <AddTodo />
      <TodoList />
      <TodoFilter/>
    </FilterProvider>

  );
};

export default App;