export const fetchUserData = () => async dispatch => {
    dispatch({ type: 'FETCH_USER_START'});

    try {
        const response = await fetch('https://apiactions.ru');
        const userData = await response.json();

        dispatch({ type: 'FETCH_USER_SUCCESS', payload: userData});
    } catch (error) {
        // будет ошибка т.к. неверная ссылка
        dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message});
    }
};
