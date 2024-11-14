
// Функция высшего порядка для фильтрации задач
const withFilter = (todos, filter) => {
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.compleled);
        case 'active':
            return todos.filter(todo => !todo.compleled);
        default:
            return todos;
    }
};

export default withFilter;