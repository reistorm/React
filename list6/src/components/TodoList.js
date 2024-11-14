import React, { useContext} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import { FilterContext } from '../contexts/FilterContext';
import withFiler from '../hoc/withFilter';
 

const TodoList = () => {
    // Получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext);

    // Применяем фильтр к задачам
    const filteredTodos = withFiler(todos, filter);

    const handleToggleTodo = (id) => {
        // отправляем действие для изменения статуса задачи 
        dispatch(toggleTodo(id));
    };

    return (
        <ul>
            {filteredTodos.map(todo => (
                <li
                    key={todo.id}
                    // при клике зачеркивался как выполненный 
                    onClick={() => handleToggleTodo(todo.id)}
                    // line-through - зачеркнуто, none - нет
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                    >
                        {todo.text}
                    </li>
            ))}
        </ul>
    )
};

export default TodoList;