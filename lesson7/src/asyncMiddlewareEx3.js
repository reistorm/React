const asyncMiddleware = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        // Делаем запрос к API
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        // на 29 минуте 27 секунд
            .then(response => response.json())
            .then(data => {
                // Самое главное для нас, диспетчеризуйте новое действие с полученными данными
                store.dispatch({ type: 'FETCH_DATA_SUCCESS', })
            })
            .catch(error => {
                // Диспетчеризуйте действие об ошибке, если что-то пошло не так
                store.dispatch({ type: 'FETCH_DATA_ERROR', payload: error.toString() });
            });
    }
    return next(action);
}

export default asyncMiddleware;