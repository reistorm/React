import { useEffect, useState } from "react"

const InputForm = () => {
    // функция для отслеживания ввода в строку ввода
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    useEffect(() => {
        console.log('Input value changed:', inputValue);
    }, [inputValue]);

    const handleSubmit = (e) => {
        // остановка отправки формы
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    // при изменении меняется inputValue на введенное e.target.value
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>Submitted value: {submittedValue}</p>}
        </div>
    )
}

export default InputForm;