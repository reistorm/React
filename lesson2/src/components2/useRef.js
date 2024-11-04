import { useEffect, useRef } from "react";

function RefExamle() {
    // Функция для фокусировки поля ввода при обновлении страницы
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    return ( 
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Фокус</button>
        </div>
     );
}

export default RefExamle;