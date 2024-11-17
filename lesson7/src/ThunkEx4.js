
import { useDispatch } from "react-redux";
import { fetchUserData } from './action';

function ThunkComponent() {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(fetchUserData()); // thunk
    };

    return <button onClick={handleButtonClick}>Загрузить данные пользователя</button>
};

export default ThunkComponent;